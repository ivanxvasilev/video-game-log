import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Cupcake", 305, 3.7),
	createData("Donut", 452, 25.0),
	createData("Eclair", 262, 16.0),
	createData("Frozen yoghurt", 159, 6.0),
	createData("Gingerbread", 356, 16.0),
	createData("Honeycomb", 408, 3.2),
	createData("Ice cream sandwich", 237, 9.0),
	createData("Jelly Bean", 375, 0.0),
	// createData("KitKat", 518, 26.0),
	// createData("Lollipop", 392, 0.2),
	// createData("Marshmallow", 318, 0),
	// createData("Nougat", 360, 19.0),
	// createData("Oreo", 437, 18.0),
];

export default function GamesTable() {
	const classes = useStyles();

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[
								5,
								10,
								25,
								{ label: "All", value: -1 },
							]}
							colSpan={3}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: { "aria-label": "rows per page" },
								native: true,
							}}
							onChangePage={handleChangePage}
							onChangeRowsPerPage={handleChangeRowsPerPage}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
