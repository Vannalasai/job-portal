import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, CircularProgress, Box } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

const JobCard = ({ job }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // height: '100%',
                boxShadow: '0 4px 8px #1976d2',
                p: 2,
                mt:3
            }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {job.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {job.company_name} - {job.location}
                </Typography>
                <Typography variant="body2">
                    {job.description.slice(0, 150)}... {/* Preview part of description */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                        },

                        width: '100%',
                    }}
                    size="small" href={job.share_link} target="_blank" rel="noopener">
                    Apply
                </Button>
            </CardActions>
        </Card>
    );
};

const JobList = ({ jobs, loading }) => {

    if (loading) {
        return (
          <Box display="flex" justifyContent="center" marginTop="18px">
            <CircularProgress />
          </Box>
        );
      }

      if (jobs.length === 0) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="20px">
            <WorkOutline style={{ fontSize: 70, color: 'gray' }} />
            <Typography variant="h6" color="textSecondary">
              No jobs available
            </Typography>
          </Box>
        );
      }

    return (
        <Grid container spacing={2}>
            {jobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobList;