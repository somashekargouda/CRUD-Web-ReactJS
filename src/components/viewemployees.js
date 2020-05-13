import React from 'react';
import { withStyles, makeStyles, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './employees.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const styles = {
 
};

class ViewEmployees extends React.Component {
  constructor(props)
  {
    super(props);
    this.classes = this.props;
    this.state={users:[], editUser: { isClicked:false, id: null  } }
    this.getUsers();
  }

  getUsers()
  {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users=>this.setState({users}))
    //   .catch(err=>console.log(err));
      axios.get('http://localhost:4000/employees')
      .then(users=>this.setState({users:users.data}))
      .catch(err=>console.log(err));
  }

  handleDelete(id)
  {
    axios.delete(`http://localhost:4000/employees/${id}`)
    .then(res =>this.getUsers())
  }  

  handleEdit(id)
  {
    this.setState({ editUser: { isClicked: true, id:id } })
  }

  render()
  {
    if (this.state.editUser.isClicked) {
      return <Redirect to={`/aboutus/${this.state.editUser.id}`} />;
    }
    else {

  return (
    <div className="container">
      <h2 className="header">Employees List</h2>
    <TableContainer component={Paper}>
      <Table className={this.classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile Number</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {this.state.users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">
              <Button onClick={()=>this.handleEdit(row.id)} variant="contained" color="secondary">Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={()=>this.handleDelete(row.id)} variant="contained"  color="danger">Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
  }
}
export default withStyles(styles)(ViewEmployees);
