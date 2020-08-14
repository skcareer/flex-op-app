import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PageviewIcon from '@material-ui/icons/Pageview';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




const useToolbarStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: "white"
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }),
);



const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: "#069c40",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);


// const column = [
//   "Dessert (100g serving)", "Calories", "Fat(g)", "Carbs(g)", "Protein(g)"
// ];





// const rows = [
//   {name: 'Frozen yoghurt', calories:159, fat: 6.0, carbs:24, protein: 4.0 },
//   {name:'Ice cream sandwich', calories: 237, fat: 9.0, carbs:37, protein: 4.3},
//   {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
//   {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
//   {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9}
// ];



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const FormatDate = (props) => {
  // console.log("From the Project Views")
  let dateArray = props.date;
  let date ="";
  // console.log(props.date)
  if (props.date !== undefined)
      date = dateArray.slice(0, -14)
  // console.log(date);
  return date;
}


const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  // const { numSelected } = props;
  // console.log("Table ToolBar@@@@@")
  // console.log("genset Name " + JSON.stringify(props.networkName));
  // console.log(props.projects)


  return (
    <Toolbar
      className={classes.root}
    >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {props.networkName}
        </Typography>
        <Typography >
              Number of Projects: {props.projects !== undefined ? props.projects.length : 0}
        </Typography>

    </Toolbar>
  );
};

export default function CustomizedTables(props) {

  // console.log("from table component "+ JSON.stringify(...props))
  const classes = useStyles();
  const {column, projects, tableName, showDelete } = props;
    
  const rows = projects;
  // console.log("Rows from ProjectsTable@@@" + projects);
  // console.log("Rows from Table" + JSON.stringify(Ttenant.slice(1)));

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
    <EnhancedTableToolbar networkName={tableName} projects={projects}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {column.map((head, index)=> ( 
               index > 0   
                    ? <StyledTableCell align="centre">{head}</StyledTableCell>
                    : <StyledTableCell>{head}</StyledTableCell>      
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">
                     <IconButton>  
                         <PageviewIcon 
                             onClick={() => props.showProject(row._id)}
                         />
                      </IconButton>
              </StyledTableCell>
              <StyledTableCell component="th" 
                               scope="row">
                               {row.projectName}
              </StyledTableCell>
              <StyledTableCell align="centre">{row.projectClient}</StyledTableCell>
              <StyledTableCell align="centre">{row.projectScope}</StyledTableCell>
              <StyledTableCell align="centre">{row.numberOfSites}</StyledTableCell>
              <StyledTableCell align="centre">{row.projectLocation}</StyledTableCell>
              <StyledTableCell align="centre">{row.projectManager}</StyledTableCell>
              <StyledTableCell align="centre"><FormatDate date= {row.startDate}/></StyledTableCell>
              <StyledTableCell align="centre"><FormatDate date= {row.estimatedEndDate}/></StyledTableCell>
              <StyledTableCell>
               {/* {showDelete && <IconButton aria-label="delete">
                 <Tooltip title="Delete"  
                     onClick={() => props.removeLoad(row.id)}>
                    <DeleteForeverIcon />
                 </Tooltip>
                 </IconButton>  } */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">

      </Typography>
      <Divider />
    </TableContainer>

    </Paper>
    </div>
  );
}
