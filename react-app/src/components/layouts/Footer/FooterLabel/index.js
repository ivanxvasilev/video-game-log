import React from "react";
import { Grid, Typography } from "@material-ui/core";

const FooterLabel = ({ label }) => {
	return (
		<Grid item xs={12} sm={6} md={3}>
			<Typography align="center" color="textSecondary">
				{label}
			</Typography>
		</Grid>
	);
};

export default FooterLabel;
