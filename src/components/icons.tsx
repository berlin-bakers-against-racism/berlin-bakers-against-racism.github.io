import { IconContext } from "react-icons";
import React, { ReactElement } from 'react';
import { GiChocolateBar, GiCupcake, GiBrightExplosion, GiCookie, GiSlicedBread, GiCoveredJar, GiPieSlice } from 'react-icons/gi';
import { RiCakeLine } from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  icon: { fontSize: "2em" }
});

const categoryMap: Record<string, ReactElement> = {
  "Bread": (<GiSlicedBread color="primary" fontSize="large" />),
  "Brownie": (<GiChocolateBar color="primary" fontSize="large" />),
  "Cake": (<RiCakeLine color="primary" fontSize="large" />),
  "Cookie": (<GiCookie color="primary" fontSize="large" />),
  "Mix": (<GiBrightExplosion color="primary" fontSize="large" />),
  "Pastry": (<GiCupcake color="primary" fontSize="large" />),
  "Pie": (<GiPieSlice color="primary" fontSize="large" />),
  "Sauce": (<GiCoveredJar color="primary" fontSize="large" />),
};

const getIconForCategory = (category: string | undefined): ReactElement | undefined => {
  const classes = useStyles();

  const icon = category ? categoryMap[category] : undefined;
  if (icon) {
    return (<IconContext.Provider value={{ color: "#663399", className: classes.icon }}>
    <div>
      {icon}
    </div>
  </IconContext.Provider>);
  }
}

export default getIconForCategory;
