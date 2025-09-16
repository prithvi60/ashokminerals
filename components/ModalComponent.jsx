"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { Contact } from "./Contact";

const ModalComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-warning text-primary text-base font-semibold capitalize duration-500 font-Formular lg:text-lg hover:animate-pulse group tracking-widest px-8 py-1.5 flex gap-2 items-center"
            >
                <MdOutlineEmail className="text-lg md:text-xl text-primary" />
                Send Enquiry
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-black/40 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-primary p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        {/* Form */}
                        <Contact data />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalComponent;
