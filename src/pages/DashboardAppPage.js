// @mui
import { Grid, Container, Typography } from '@mui/material';
// components
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" > Tech Assessment Dashboard | Minimal UI </Typography>

        <Typography variant="h6" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Scheduled Assessments" total={5} icon={'ant-design:calendar'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Completed Assessments This Month" total={21} color="info" icon={'ant-design:step-forward'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="% Recommended by Evergreen" total={45} color="success" icon={'ant-design:check-square'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="% Not Recommended by Evergreen" total={55} color="error" icon={'ant-design:close-circle'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Assessment Volume"
              subheader="(+15%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Screener A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Screener B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Screener C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Volume Per Screener"
              chartData={[
                { label: 'Screener A', value: 4344 },
                { label: 'Screener B', value: 5435 },
                { label: 'Screener C', value: 1443 },
              ]}
              
            />
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
