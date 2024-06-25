'use client'
import React from 'react';
import { Grid, Box, Typography, Button, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import headerLogo from "../../../public/images/LAPD-Badge-Logo.png"
import firstlogo from "../../../public/images/Image.svg"
import iconimage1 from "../../../public/images/Group 2.svg";
import iconimage2 from "../../../public/images/Traced Image.svg";
import iconimage3 from "../../../public/images/Group 4.svg";
import iconimage4 from "../../../public/images/book (1) 2.svg";
import iconimage5 from "../../../public/images/Group 6.svg";
import iconimage6 from "../../../public/images/Group 3.svg";
import Try2 from '../Try2/page'
import Try1 from '../Try1/page'
import Cards from '../Cards/page'
import Footer from '../Footer/page'
const Home: React.FC = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} >
                <Box sx={{ flexDirection: "column" }}>

                    <Box sx={{ width: "100%", backgroundColor: "#052942",  display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <Box sx={{ display: "flex", gap: "6px", marginLeft: "15px", flexDirection: "row", alignItems: "center" }}>
                        <Image alt="logo" src={firstlogo} height={30} width={30} />

                            <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>LOS ANGELS</Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "15px", marginRight: "15px", justifyContent: "center", alignItems: "center" }}>
                            <Box>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Box className={styles.topNavbar}>
                                        <Typography sx={{ fontSize: "12px",color:'black' }}>311</Typography>
                                    </Box>
                                    <Typography  sx={{ color: "white", fontSize: "12px" }}>
                                        City Services
                                    </Typography>
                                </Box>
                            </Box>


                            <Box>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Box className={styles.topNavbar}>
                                        <Typography sx={{ fontSize: "12px",color:'black' }}>LA</Typography>
                                    </Box>
                                    <Typography  sx={{ color: "white", fontSize: "12px" }}>
                                        City Directory
                                    </Typography>
                                </Box>
                            </Box>


                            <Box sx={{ padding: "5px" }}>
                                <input placeholder='English'></input>
                            </Box>
                        </Box>

                    </Box>




                </Box>
        
      </Grid>
     
          <Grid item xs={12} className={styles.navbar}>
  <nav className={styles.nav}>
    <div className={styles.leftNav}>
      <Link href="/" legacyBehavior>
        <a>
          <Image src={headerLogo} id="logo" alt="header-logo" height={96} width={68} />
        </a>
      </Link>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >YOUR LAPD</Typography></a></Link>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >GET SERVICE</Typography></a></Link>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >CRIME INFO
</Typography></a></Link>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >
GET INVOLVED</Typography></a></Link>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >NEWS</Typography></a></Link>
    </div>
    <div className={styles.rightNav}>
      <Link href="#" legacyBehavior><a className={styles.navLink}><Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >CONTACT</Typography></a></Link>
      <IconButton className={styles.searchButton}>
        <SearchIcon />
      </IconButton>
    </div>
  </nav>
         </Grid>

<Grid item xs={12} className={styles.videoBox}>
      <Box className={styles.videoOverlay}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="Sirenvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        

      <Box className={styles.videoContent}>
      <Typography sx={{
       
       fontFamily: "'TradeGothic LT Bold', sans-serif",
       fontSize: 22,
       fontStyle: 'normal',
       fontWeight: 500,
       lineHeight: 'normal',
       
     }}  > The Official Site of the Los Angeles Police Department</Typography>
          <Typography sx={{
       marginTop:'20px',
       fontFamily: "'TradeGothic LT Bold', sans-serif",
       fontSize: 54.2,
       fontStyle: 'italic',
       fontWeight: 700,
       lineHeight: 'normal',
     }}  > “to protect and to serve”</Typography>
      </Box>
      </Box>
    </Grid>

    <Grid item xs={12} className={styles.joinLAPD}>
     
      <Typography sx={{
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  >Become an LAPD Officer: Courage, Commitment, Community.</Typography>
      <Button variant="contained" color="primary" sx={{backgroundColor:'#052942'}} className={styles.joinButton}> 
      <Typography sx={{
       
  fontFamily: "'TradeGothic LT Bold', sans-serif",
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}  > JOIN LAPD</Typography>
      </Button>
    </Grid>


    
    <div className={styles.container1}>
      <Box className={styles.boxContainer}>
        <Box className={styles.iconBox}  sx={{marginBottom:"40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box className={styles.iconItem}>
                <Image src={iconimage1} alt="iconimage1" width={60} height={60} />
                <Typography className={styles.typestyle}>FILE A <br />POLICE REPORT</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.iconItem}>
                <Image src={iconimage2} alt="iconimage2" width={60} height={60} />
                <Typography className={styles.typestyle}>OBTAIN A <br />TRAFFIC COLLISION</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ marginBottom: '50px' }}>
              <Box className={styles.iconItem}>
                <Image src={iconimage3} alt="iconimage3" width={60} height={60} />
                <Typography className={styles.typestyle}>CRIME <br />MAPPING</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.iconItem}>
                <Image src={iconimage4} alt="iconimage4" width={60} height={60} />
                <Typography className={styles.typestyle}>REFERENCE <br />LIBRARY</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.iconItem}>
                <Image src={iconimage5} alt="iconimage5" width={60} height={60} />
                <Typography className={styles.typestyle}>POLICE <br />COMMISSION</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.iconItem}>
                <Image src={iconimage6} alt="iconimage6" width={60} height={60} />
                <Typography className={styles.typestyle}>MOST <br />WANTED</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        /*  cards style*/ 

        
        <div className={styles.container2}>
      <div className={styles.card}>
        <div className={styles.textSection}>
          <h2 className={styles.header2}>THE WORLD LOREM IPSUM DOLOR SI LOREM IPSUM</h2>
          <p className={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.imageSection}>
          <Image src="/sideimage1.png" alt="Image" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.textSection}>
          <h2 className={styles.header2}>THE WORLD LOREM IPSUM DOLOR SI LOREM IPSUM</h2>
          <p className={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.imageSection}>
          <Image src="/sideimage2.png" alt="Image" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
      </Box>
    </div>

    <Box sx={{width:'100%'}}>
      <Try2 />
    </Box>
    <Box sx={{width:'100%'}}>
      <Try1/>
    </Box>
    <Box sx={{width:'100%'}}>
      <Cards />
    </Box>
    <Box sx={{width:'100%'}}>
      <Footer />
    </Box>


    </Grid>

  
  );
};

export default Home;
