/* eslint-disable no-unused-vars */
// import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Sidebar() {
    const navItems = [
        {
            name: "LeaderBoard",
            slug: '/',
        },
        {
            name: "Historical Trading",
            slug: '/',
        },
        {
            name: "Historical Chart",
            slug: '/',
        },
        {
            name: "Scanners",
            slug: '/',
        },
        {
            name: "Alerts",
            slug: '/',
        },
        {
            name: "Basic Backtest",
            slug: '/',
        },
        {
            name: "Advanced Backtest",
            slug: '/',
        },
        {
            name: "Pricing",
            slug: '/',
        },
        {
            name: "My Earnings",
            slug: '/',
        },

    ]
    return (
        <motion.div className="min-h-screen">
            <motion.div className="logo">
                <motion.img src="/public/logodark.png" className="w-48 ml-16 pt-[22px] mb-[2.25rem] cursor-pointer" alt="" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, transition: { duration: 1.1 }, scale: 1 }} />
            </motion.div>
            <motion.div>
                <motion.ul className="m-6 list-disc pl-[25px]">
                    {navItems.map((item) => (
                        <motion.li key={item.name} className="font-robot text-[18px] mb-2 p-3   font-medium hover:text-slate-200 hover:bg-sidecolor rounded-3xl" whileHover={{
                            scale: 1.07,
                            transition: {
                                duration: 0.3
                            }
                        }}
                            initial={{ opacity: 0 }} animate={{ transition: { duration: 2.0 }, opacity: 1 }}>
                            <Link className=""> {item.name}</Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Sidebar