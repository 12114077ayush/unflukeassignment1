/* eslint-disable no-unused-vars */
import React from 'react'
import MovingIcon from '@mui/icons-material/Moving';
// import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Tabelcontent() {
    const leaderboard = [
        {
            rank: '1',
            name: "	Selling with re entr",
            calmar: "3.96",
            overall_profit: "381845",
            avg_daily_profit: "319.54",
            win: "0.65",
            Price: "-",
            Action: "View",
            color: true,
        },
        {
            rank: '2',
            name: "strategy_name",
            calmar: "3.62",
            overall_profit: "268872.5",
            avg_daily_profit: "216.31",
            win: "0.64",
            Price: "500",
            Action: "Buy",
            color: false,
        },
        {
            rank: '3',
            name: "Based on premium and",
            calmar: "3.42",
            overall_profit: "255425",
            avg_daily_profit: "208.51",
            win: "0.64",
            Price: "-",
            Action: "View",
            color: true,
        },
        {
            rank: '4',
            name: "strategy_name",
            calmar: "3.22",
            overall_profit: "370845",
            avg_daily_profit: "303.47",
            win: "0.65",
            Price: "-",
            Action: "View",
            color: false,
        },
        {
            rank: '5',
            name: "	strategy_name",
            calmar: "3.22",
            overall_profit: "370845",
            avg_daily_profit: "303.47",
            win: "0.65",
            Price: "-",
            Action: "View",
            color: true,
        },
        {
            rank: '6',
            name: "Based on premium wit",
            calmar: "3.01",
            overall_profit: "135980",
            avg_daily_profit: "185.77",
            win: "0.49",
            Price: "-",
            Action: "View",
            color: false,
        },
        {
            rank: '7',
            name: "	strategy_name",
            calmar: "2.76",
            overall_profit: "267867.5",
            avg_daily_profit: "218.49",
            win: "0.6",
            Price: "-",
            Action: "View",
            color: true,
        },
        {
            rank: '8',
            name: "Wait and trade_Save",
            calmar: "2.62",
            overall_profit: "178252.5",
            avg_daily_profit: "161.9",
            win: "0.63",
            Price: "-",
            Action: "View",
            color: false,
        },
        {
            rank: '9',
            name: "iron condor",
            calmar: "2.44",
            overall_profit: "176420",
            avg_daily_profit: "137.51",
            win: "0.65",
            Price: "-",
            Action: "View",
            color: true,
        },
        {
            rank: '10',
            name: "	strategy_name",
            calmar: "2.04",
            overall_profit: "244555",
            avg_daily_profit: "198.66",
            win: "0.62",
            Price: "-",
            Action: "View",
            color: false,
        },
    ]
    return (
        <motion.div className='bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 '>
            <table className='w-full h-full '>
                <thead className='font-robot text-gray-700 font-medium bg-slate-200  border-b-2 border-gray-400'>
                    <tr className=''>
                        <th className='p-3  text-left tracking-wide'>Rank</th>
                        <th className='p-3 text-left tracking-wide'>Name</th>
                        <th className='p-3 text-left tracking-wide'>Calmar Ratio</th>
                        <th className='p-3 text-left tracking-wide'>Overall Profit</th>
                        <th className='p-3 text-left tracking-wide'>Avg. Daily Profit</th>
                        <th className='p-3 text-left tracking-wide'>Win %(Day)</th>
                        <th className='p-3 text-left tracking-wide'>Price(Rs)</th>
                        <th className='p-3 text-left tracking-wide'>Action</th>
                    </tr>
                </thead>
                <motion.tbody>
                    {
                        leaderboard.map((data) => (
                            <motion.tr key={data.rank} className={`${data.color ? 'bg-white' : 'bg-slate-200'}`} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}>
                                <td className='p-3'>{data.rank}</td>
                                <td className='p-3'>{data.name}</td>
                                <td className='p-3'><span><MovingIcon className='mr-1 text-green-700 text-sm ' sx={{ fontSize: '17px' }} />{data.calmar}</span></td>
                                <td className='p-3'>{data.overall_profit}</td>
                                <td className='p-3'>{data.avg_daily_profit}</td>
                                <td className='p-3'>{data.win}</td>
                                <td className='p-3'>{data.Price}</td>
                                <td className='p-3 text-blue-500 font-medium'><Link to='/'>{data.Action}</Link></td>
                            </motion.tr>
                        ))
                    }
                </motion.tbody>
            </table>
        </motion.div>
    )
}

export default Tabelcontent