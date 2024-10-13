import * as React from 'react';
import PropTypes, { string } from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

function createData(id, profile, date, name, status, service) {
  return {
    id,
    profile,
    date,
    name,
    status,
    service,
  };
}

const rows = [
  createData(1, '#0001', '12/07/2004', 'Võ Trần Minh Tuấn', 'Đang xử lý', 'Cell'),
  createData(2, '#0002', '13/08/2004', 'Đặng Thái Tuấn', 'Chờ xử lý', 'Cell'),
  createData(3, '#0003', '2/11/1942', 'Mai Chiến Thắng', 'Sẵn sàng ký số', 'Cell'),
  createData(4, '#0004', '19/02/1981', 'Võ Minh Tú', 'Hoàn tất', 'Cell'),
  createData(5, '#0005', '28/01/1999', 'Trần Thanh Vy', 'Không hợp lệ', 'Cell'),
  createData(6, '#0006', '12/07/2004', 'Trần Thanh Vy', 'Đang xử lý', 'Cell'),
  createData(7, '#0007', '12/07/2004', 'Trần Thanh Vyn', 'Hoàn tất', 'Cell'),
  createData(8, '#0008', '12/07/2004', 'Tiến Luật', 'Hoàn tất', 'Cell'),
  createData(9, '#0009', '12/07/2004', 'Võ Minh Tún', 'Hoàn tất', 'Cell'),
  createData(10, '#0010', '12/07/2004', 'Huỳnh Trấn Thành', 'Đang xử lý', 'Cell'),
  createData(11, '#0011', '12/07/2004', 'Hoài Linh ', 'Sẵn sàng ký số', 'Cell'),
  createData(12, '#0012', '12/07/2004', 'Công Vinh', 'Chờ xử lý', 'Cell'),
  createData(13, '#0013', '12/07/2004', 'Thủy Tiên', 'Đang xử lý', 'Cell'),
  createData(14, '#0014', '12/07/2004', 'Việt Hương', 'Hoàn tất', 'Cell'),
  createData(15, '#0015', '12/07/2004', 'Lâm Vỹ Dạ', 'Sẵn sàng ký số', 'Cell'),
];

const StatusTypes = {
  All: 'Tất cả',
  Waiting: 'Chờ xử lý',
  Processing: 'Đang xử lý',
  ReadyToSign: 'Sẵn sàng ký số',
  Completed: 'Hoàn tất',
  Invalid: 'Không hợp lệ',
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function SetStatusColor(params) {
  let color = '';
  if (params === 'Chờ xử lý') color = '#324155';
  else if (params === 'Đang xử lý') color = '#FFAA00';
  else if (params === 'Sẵn sàng ký số') color = '#0095FF';
  else if (params === 'Hoàn tất') color = '#43B75D';
  else if (params === 'Không hợp lệ') color = '#EE443F';
  return color;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'profile',
    numeric: false,
    disablePadding: true,
    label: 'Số hồ sơ',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'Ngày công chứng',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Người yêu cầu',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Tình trạng',
  },
  {
    id: 'service',
    numeric: false,
    disablePadding: true,
    label: 'Loại dịch vụ',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{
        backgroundColor: '#F9FAFB'
      }}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const HistoryDataTable = ({ filterStatus, searchText }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('profile');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(() => {
    let filteredRows = rows;

    if (filterStatus !== StatusTypes.All) {
      filteredRows = rows.filter((row) => row.status === filterStatus);
    }

    if (searchText) {
      filteredRows = filteredRows.filter(
        (row) =>
          row.profile.toLowerCase().includes(searchText.toLowerCase()) ||
          row.name.toLowerCase().includes(searchText.toLowerCase()) ||
          row.date.toLowerCase().includes(searchText.toLowerCase()) ||
          row.status.toLowerCase().includes(searchText.toLowerCase()) ||
          row.service.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    return filteredRows.sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filterStatus, searchText, order, orderBy, page, rowsPerPage]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%'}}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody sx={{
              backgroundColor: '#FFF'
            }}>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.profile}
                    </TableCell>
                    <TableCell align="left" width={'20%'}>
                      {row.date}
                    </TableCell>
                    <TableCell align="left" width={'20%'}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left" width={'20%'}>
                      <Typography
                        sx={{
                          color: SetStatusColor(row.status),
                          backgroundColor: '#EBEDEF',
                          padding: '4px 16px',
                          borderRadius: '30px',
                          fontSize: '15px',
                          width: 'fit-content',
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" width={'20%'}>
                      {row.service}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'Số dòng mỗi trang'}
          sx={{
            backgroundColor: '#FFF'
          }}
        />
      </Paper>
    </Box>
  );
};
export default HistoryDataTable;
