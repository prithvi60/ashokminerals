import React, { useCallback, useMemo } from 'react';
import { Card } from "@heroui/card";
import { useEffect, useState } from "react";
import { Stack, Box, Flex, Label, Switch } from '@sanity/ui';
import { client } from "@/sanity/lib/client";
import { MARKETS_QUERY } from "@/sanity/Queries";
import { set, unset } from 'sanity';

const MarketCheckboxInput = (props) => {
    const { value = [], onChange, readOnly } = props;
    const [markets, setMarkets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Create a Set of selected market IDs
    const selectedRefs = useMemo(() => new Set(value.map(ref => ref._ref)), [value]);

    useEffect(() => {
        const fetchMarkets = async () => {
            try {
                setLoading(true);
                const fetchedMarkets = await client.fetch(
                    MARKETS_QUERY,
                    {},
                    {
                        cache: "no-cache",
                        next: {
                            tags: ["market"],
                        },
                    }
                );
                setMarkets(fetchedMarkets);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching markets:", error);
                setLoading(false);
            }
        };

        fetchMarkets();
    }, []);

    const handleToggle = useCallback((marketId) => {
        const isSelected = selectedRefs.has(marketId);

        if (isSelected) {
            // Remove the market
            const newValue = value.filter(ref => ref._ref !== marketId);
            // If array is empty, unset the field, otherwise set the new value
            onChange(newValue.length === 0 ? unset() : set(newValue));
        } else {
            // Add the market
            const newRef = {
                _type: 'reference',
                _ref: marketId,
                _key: `${marketId}-${Date.now()}`
            };
            onChange(set([...value, newRef]));
        }
    }, [value, selectedRefs, onChange]);

    if (loading) {
        return (
            <Box padding={4}>
                <Card>
                    <div className="p-4">
                        <p>Loading markets...</p>
                    </div>
                </Card>
            </Box>
        );
    }

    return (
        <Box padding={4}>
            <Stack space={3}>
                {markets.map((market) => (
                    <Flex key={market._id} align="center" gap={2}>
                        <Switch
                            id={`market-${market._id}`}
                            checked={selectedRefs.has(market._id)}
                            onChange={() => handleToggle(market._id)}
                            disabled={readOnly}
                        />
                        <Label
                            htmlFor={`market-${market._id}`}
                            style={{ marginLeft: '0.5rem' }}
                        >
                            {market.title}
                        </Label>
                    </Flex>
                ))}
            </Stack>
            {markets.length === 0 && (
                <Box marginTop={4}>
                    <p>No markets available. Please add markets in the Markets section.</p>
                </Box>
            )}
        </Box>
    );
};

export default MarketCheckboxInput;