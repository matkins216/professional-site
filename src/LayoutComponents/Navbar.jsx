import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FlexBetween from './FlexBetween';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <FlexBetween mb="0rem" p="0.5rem 0.5rem" color="#204947" fontSize="24px" bgcolor="#ee6af3" width="100%" >

            <FlexBetween gap="0.5rem">
                <CodeIcon sx={{
                    fontSize: "28px",
                    color: "#204947"
                }}/>
                <Typography variant='h5'>Matthew Atkins</Typography> 
            </FlexBetween>


            <FlexBetween>
                <Box sx={{ "&:hover": { color: "#f3b76a" }}}>
                    <Link to="/"> Home </Link>
                        
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}

export default Navbar;