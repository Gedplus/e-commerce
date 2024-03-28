import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import  moment from "moment";
import { getCommande,  useGetUtilisateursQuery } from '../../state/api'


function Row({ row , user  }) {
 
  const [open, setOpen] = React.useState(false);
  const userss = useGetUtilisateursQuery();
  const users =userss.data
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row._id}
        </TableCell>
        <TableCell align="right">{row.Total}</TableCell>
        <TableCell align="right">{ moment().format(row.createdAt)}</TableCell>
        <TableCell align="right">{row.product.length}</TableCell>
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
   Documents
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Titre</TableCell>
                    <TableCell>Auteur</TableCell>
                    <TableCell align="right">Type de document</TableCell>
                    <TableCell align="right">Prix</TableCell>
                    <TableCell align="right">Document</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.product.map((historyRow) => (
                    <TableRow key={historyRow._id}>
                      <TableCell component="th" scope="row">
                        {historyRow.titre}
                      </TableCell>
                      <TableCell component="th" scope="row">
                      {users.map((user) => {return( <>    {historyRow.auteur === user._id ? ( <> {user.name}</>):(<></>)}</>)})}                       
                      </TableCell>
                      <TableCell>{historyRow.typeF}</TableCell>
                      <TableCell align="right">{historyRow.prixF}</TableCell>
                      <TableCell align="right">



                        {historyRow.typeF == "Lecture" ?(                  <Link to={`/detail/${historyRow._id}`} >{historyRow.document} </Link>) :( <a  style={{color:"blue" }}href={`https://api.bibintunisie.com/public/files/${historyRow.document}`}> {historyRow.document}</a>)}
           
                      
                      
    
                      
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function CollapsibleTable({user}) {

  const [Achats, setAchats] = React.useState([]);
console.log(user._id)
  React.useEffect(() => {
    const loadMediaDetails = async() => {
        const response = await getCommande(user._id);
        setAchats(response.data);
  
    }
    loadMediaDetails();
  }, [user._id]);
console.log("Achats" ,Achats)
  return (
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Numéro de commande</TableCell>
            <TableCell align="right">Montant total</TableCell>
            <TableCell align="right">date de commande </TableCell>
            <TableCell align="right">Nombre de documents </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {Achats?.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}