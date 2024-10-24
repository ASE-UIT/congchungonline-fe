import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const SkeletonHistoryDataTable = ({ headCells }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
            <TableCell padding="checkbox" sx={{ borderRadius: '8px' }}>
              <Checkbox color="primary" />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id} align={'left'} padding={'none'} sx={{ borderRadius: '8px' }}>
                {' '}
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: '#FFF' }}>
          {Array.from(new Array(headCells.length)).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row" padding="none" width={'20%'}>
                <Skeleton variant="text" />
              </TableCell>
              <TableCell width={'20%'} align="left">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell width={'20%'} align="left">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell width={'20%'} align="left">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell width={'20%'} align="left">
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkeletonHistoryDataTable;
