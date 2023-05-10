import DashboardBox from '../LayoutComponents/DashboardBox';
import { Box, Typography } from '@mui/material';


const gridTemplate= `
 "a b c"
 "a b c"
 "a b c"
`

function HomePage() {
    


    return (
        <Box width="100%" height="100%" display="grid" gap="1.5rem" padding="5rem 0.5rem 0rem 0.5rem"
        sx={{
            gridTemplateColumns: "repeat(3, minmax(150px, 450px))",
            gridTemplateRows: "repeat(4, minmax(50px, 1fr))",
            gridTemplateAreas: gridTemplate,
            bgcolor: "#6af3ee",
            justifyContent: "center",
        }}>
            <DashboardBox textAlign="center" gap="0.75rem" p="0.5rem 0.5rem" gridArea="a">
                <Typography variant='h4' color='#0d284b'>Bio</Typography> 
            </DashboardBox>
            <DashboardBox textAlign="center" gap="0.75rem" p="0.5rem 0.5rem" gridArea="b">
                <Typography variant='h4' color='#0d284b'>Projects</Typography> 
            </DashboardBox>
            <DashboardBox gap="0.75rem" p="0.5rem 0.5rem" gridArea="c">
                <Typography variant='h4' color='#0d284b'> Resume </Typography> 
            </DashboardBox>
        </Box>
    );
}

export default HomePage;