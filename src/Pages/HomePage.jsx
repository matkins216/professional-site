import DashboardBox from '../LayoutComponents/DashboardBox';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


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
                <Typography m=" 1rem" fontSize="20px" color='#0d284b'> I am a Front End Software Engineer with previous experience in mortgage and real estate software, martech software, logistics, and medical devices. I use my previous skills to guide my work daily. Over my nine years in sales, I have acquired skills that make me a great listener, problem-solver, mentor, and allow me to keep a level head in stressful situations.</Typography>
                <Typography m=" 1rem" fontSize="20px" color='#0d284b'> I enjoy playing with my dog, golfing, staying active, and game nights. I also DJ at the clubs around Denver.</Typography>
                
                <Link sx={{ "&:hover": { color: "#d5f529"} }}
                m="1rem" href="https://www.linkedin.com/in/matthewatkins216/" target='_blank' fontSize="48px" color="#0d284b" underline="hover" border="2px"><LinkedInIcon fontSize='48px'/></Link>

                <Link sx={{ "&:hover": { color: "#d5f529" } }}
                    m="1rem" href="https://www.github.com/matkins216/" target='_blank' fontSize="48px" color="#0d284b" underline="hover" border="2px"><GitHubIcon fontSize='48px' /></Link>
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