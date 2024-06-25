import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './try.module.css';

const NewsSection: React.FC = () => {
  return (
    <Box className={styles.newsSection}>
      <Typography variant="subtitle1" className={styles.subtitle}>
        Get up to date information from blogs and events
      </Typography>
      <Typography variant="h3" className={styles.mainTitle}>
        Our Blog & Events
      </Typography>

      <Grid container spacing={2} className={styles.contentGrid}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card className={styles.card}>
                    <CardMedia
                      component="img"
                      alt="Road Closed, House On Fire"
                      image="/cardimage1.png"
                      className={styles.cardMedia}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        Road Closed
                      </Typography>
                      <Box className={styles.cardDetails}>
                        <EventIcon fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                          Aug 25, 2024
                        </Typography>
                        <PersonIcon fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                          Nodi Blake
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                      </Typography>
                      <Typography variant="body2" color="textSecondary" className={styles.readMore}>
                        Read More
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className={styles.card}>
                    <CardMedia
                      component="img"
                      alt="Shoe Factory Caught Fire"
                      image="/cardimage2.png"
                      className={styles.cardMedia}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        Shoe Factory Caught Fire
                      </Typography>
                      <Box className={styles.cardDetails}>
                        <EventIcon fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                          Oct 14, 2024
                        </Typography>
                        <PersonIcon fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                          Nodi Blake
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                      </Typography>
                      <Typography variant="body2" color="textSecondary" className={styles.readMore}>
                        Read More
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            {/* Second Column */}
            <Grid item xs={6}>
              <Box className={styles.eventBox}>
                <Box className={styles.dateBox}>
                  <Typography className={styles.dateText}>
                    12
                  </Typography>
                  <Typography className={styles.dateMonth}>
                    Aug
                  </Typography>
                </Box>
                <Box>
                  <Typography className={styles.h1text}>
                    Lorem Ipsum Lorem Ipsum
                  </Typography>
                  <Box className={styles.eventDetails}>
                    <LocationOnIcon fontSize="small" className={styles.iconRed} />
                    <Typography variant="body2" color="textSecondary">
                      Glasgow, DO4 89GR
                    </Typography>
                    <AccessTimeIcon fontSize="small" className={styles.iconRed} />
                    <Typography variant="body2" color="textSecondary">
                      03:00 pm - 10:00 pm
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={styles.readMore}>
                    Read More
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.eventBox}>
                <Box className={styles.dateBox}>
                  <Typography className={styles.dateText}>
                    11
                  </Typography>
                  <Typography className={styles.dateMonth}>
                    Aug
                  </Typography>
                </Box>
                <Box>
                  <Typography className={styles.h1text}>
                    Lorem Ipsum Lorem Ipsum
                  </Typography>
                  <Box className={styles.eventDetails}>
                    <LocationOnIcon fontSize="small" className={styles.iconRed} />
                    <Typography variant="body2" color="textSecondary">
                      Glasgow, DO4 89GR
                    </Typography>
                    <AccessTimeIcon fontSize="small" className={styles.iconRed} />
                    <Typography variant="body2" color="textSecondary">
                      03:00 pm - 10:00 pm
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={styles.readMore}>
                    Read More
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsSection;
