import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const timetableData = [
  { day: 'Monday', time: '9:00 AM - 10:30 AM', subject: 'Math', teacher: 'Mr. Smith' },
  { day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Science', teacher: 'Ms. Johnson' },
  // Add more entries here
];

function TimeTablePage() {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Timetable
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Teacher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timetableData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.day}</TableCell>
                <TableCell>{entry.time}</TableCell>
                <TableCell>{entry.subject}</TableCell>
                <TableCell>{entry.teacher}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TimeTablePage;

