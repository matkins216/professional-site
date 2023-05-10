import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FlexBetween from './FlexBetween';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <FlexBetween mb="0rem" p="0.5rem 0.5rem" color="#0d284b" fontSize="24px" bgcolor="#2983f5" width="100%" >

            <FlexBetween gap="0.5rem">
                <CodeIcon sx={{
                    fontSize: "28px",
                    color: "#0d284b"
                }} />
                <Typography variant='h5'>Matthew Atkins</Typography>
            </FlexBetween>


            <FlexBetween>
                <Box sx={{ "&:hover": { color: "#ffff" } }}>

                    <Link to="/">
                        <Button variant='outlined' color='white'>Home</Button>
                    </Link>

                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}

export default Navbar;