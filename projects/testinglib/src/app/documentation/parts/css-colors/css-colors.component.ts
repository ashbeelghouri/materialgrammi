import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-colors',
  templateUrl: './css-colors.component.html',
  styleUrls: ['./css-colors.component.css']
})
export class CssColorsComponent implements OnInit {

  lite = "grey2";

  dark = "grey10"


  reds = [{
    name: "red",
    code: "#F44336",
    clr: this.dark
  }, {
    name: "red1",
    code: "#FFEBEE",
    clr: this.dark
  }, {
    name: "red2",
    code: "#FFCDD2",
    clr: this.dark
  }, {
    name: "red3",
    code: "#EF9A9A",
    clr: this.dark
  }, {
    name: "red4",
    code: "#E57373",
    clr: this.dark
  }, {
    name: "red5",
    code: "#EF5350",
    clr: this.lite
  }, {
    name: "red7",
    code: "#E53935",
    clr: this.lite
  }, {
    name: "red8",
    code: "#D32F2F",
    clr: this.lite
  }, {
    name: "red9",
    code: "#C62828",
    clr: this.lite
  }, {
    name: "red10",
    code: "#B71C1C",
    clr: this.lite
  }, {
    name: "red11",
    code: "#FF8A80",
    clr: this.dark
  }, {
    name: "red12",
    code: "#FF5252",
    clr: this.lite
  }, {
    name: "red13",
    code: "#FF1744",
    clr: this.lite
  }, {
    name: "red14",
    code: "#D50000",
    clr: this.lite
  }];

  pink = [{
    name: "pink",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "pink1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "pink2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "pink3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "pink4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "pink5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "pink7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "pink8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "pink9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "pink10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "pink11",
    code: "#FF80AB"
  },
  {
    name: "pink12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "pink13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "pink14",
    code: "#C51162",
    clr: this.lite
  }];

  purple = [{
    name: "purple",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "purple1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "purple2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "purple3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "purple4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "purple5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "purple7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "purple8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "purple9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "purple10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "purple11",
    code: "#FF80AB"
  },
  {
    name: "purple12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "purple13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "purple14",
    code: "#C51162",
    clr: this.lite
  }];

  deepPurple = [{
    name: "deepPurple",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "deepPurple1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "deepPurple2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "deepPurple3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "deepPurple4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "deepPurple5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "deepPurple7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "deepPurple8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "deepPurple9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "deepPurple10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "deepPurple11",
    code: "#FF80AB"
  },
  {
    name: "deepPurple12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "deepPurple13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "deepPurple14",
    code: "#C51162",
    clr: this.lite
  }];

  indigo = [{
    name: "indigo",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "indigo1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "indigo2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "indigo3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "indigo4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "indigo5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "indigo7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "indigo8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "indigo9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "indigo10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "indigo11",
    code: "#FF80AB"
  },
  {
    name: "indigo12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "indigo13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "indigo14",
    code: "#C51162",
    clr: this.lite
  }];

  blue = [{
    name: "blue",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "blue1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "blue2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "blue3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "blue4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "blue5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "blue7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "blue8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "blue9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "blue10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "blue11",
    code: "#FF80AB"
  },
  {
    name: "blue12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "blue13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "blue14",
    code: "#C51162",
    clr: this.lite
  }];


  lightblue = [{
    name: "lightBlue",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "lightBlue1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "lightBlue2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "lightBlue3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "lightBlue4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "lightBlue5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "lightBlue7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "lightBlue8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "lightBlue9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "lightBlue10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "lightBlue11",
    code: "#FF80AB"
  },
  {
    name: "lightBlue12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "lightBlue13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "lightBlue14",
    code: "#C51162",
    clr: this.lite
  }];


  cyan = [{
    name: "cyan",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "cyan1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "cyan2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "cyan3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "cyan4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "cyan5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "cyan7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "cyan8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "cyan9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "cyan10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "cyan11",
    code: "#FF80AB"
  },
  {
    name: "cyan12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "cyan13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "cyan14",
    code: "#C51162",
    clr: this.lite
  }];


  teal = [{
    name: "teal",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "teal1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "teal2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "teal3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "teal4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "teal5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "teal7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "teal8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "teal9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "teal10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "teal11",
    code: "#FF80AB"
  },
  {
    name: "teal12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "teal13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "teal14",
    code: "#C51162",
    clr: this.lite
  }];


  green = [{
    name: "green",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "green1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "green2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "green3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "green4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "green5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "green7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "green8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "green9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "green10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "green11",
    code: "#FF80AB"
  },
  {
    name: "green12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "green13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "green14",
    code: "#C51162",
    clr: this.dark
  }];


  lightgreen = [{
    name: "lightGreen",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "lightGreen1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "lightGreen2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "lightGreen3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "lightGreen4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "lightGreen5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "lightGreen7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "lightGreen8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "lightGreen9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "lightGreen10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "lightGreen11",
    code: "#FF80AB",
    clr: this.dark
  },
  {
    name: "lightGreen12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "lightGreen13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "lightGreen14",
    code: "#C51162",
    clr: this.dark
  }];


  lime = [{
    name: "lime",
    code: "#E91E63",
    clr: this.dark
  },
  {
    name: "lime1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "lime2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "lime3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "lime4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "lime5",
    code: "#EC407A",
    clr: this.dark
  },
  {
    name: "lime7",
    code: "#D81B60",
    clr: this.dark
  },
  {
    name: "lime8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "lime9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "lime10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "lime11",
    code: "#FF80AB",
    clr: this.dark
  },
  {
    name: "lime12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "lime13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "lime14",
    code: "#C51162",
    clr: this.dark
  }];


  yellow = [{
    name: "yellow",
    code: "#E91E63",
    clr: this.dark
  },
  {
    name: "yellow1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "yellow2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "yellow3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "yellow4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "yellow5",
    code: "#EC407A",
    clr: this.dark
  },
  {
    name: "yellow7",
    code: "#D81B60",
    clr: this.dark
  },
  {
    name: "yellow8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "yellow9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "yellow10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "yellow11",
    code: "#FF80AB",
    clr: this.dark
  },
  {
    name: "yellow12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "yellow13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "yellow14",
    code: "#C51162",
    clr: this.dark
  }];


  amber = [{
    name: "amber",
    code: "#E91E63",
    clr: this.dark
  },
  {
    name: "amber1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "amber2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "amber3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "amber4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "amber5",
    code: "#EC407A",
    clr: this.dark
  },
  {
    name: "amber7",
    code: "#D81B60",
    clr: this.dark
  },
  {
    name: "amber8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "amber9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "amber10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "amber11",
    code: "#FF80AB",
    clr: this.dark
  },
  {
    name: "amber12",
    code: "#FF4081",
    clr: this.dark
  },
  {
    name: "amber13",
    code: "#F50057",
    clr: this.dark
  },
  {
    name: "amber14",
    code: "#C51162",
    clr: this.dark
  }];


  orange = [{
    name: "orange",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "orange1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "orange2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "orange3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "orange4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "orange5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "orange7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "orange8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "orange9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "orange10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "orange11",
    code: "#FF80AB"
  },
  {
    name: "orange12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "orange13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "orange14",
    code: "#C51162",
    clr: this.lite
  }];


  deepOrange = [{
    name: "deepOrange",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "deepOrange1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "deepOrange2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "deepOrange3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "deepOrange4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "deepOrange5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "deepOrange7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "deepOrange8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "deepOrange9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "deepOrange10",
    code: "#880E4F",
    clr: this.lite
  },
  {
    name: "deepOrange11",
    code: "#FF80AB"
  },
  {
    name: "deepOrange12",
    code: "#FF4081",
    clr: this.lite
  },
  {
    name: "deepOrange13",
    code: "#F50057",
    clr: this.lite
  },
  {
    name: "deepOrange14",
    code: "#C51162",
    clr: this.lite
  }];


  brown = [{
    name: "brown",
    code: "#E91E63",
    clr: this.lite
  },
  {
    name: "brown1",
    code: "#FCE4EC",
    clr: this.dark
  },
  {
    name: "brown2",
    code: "#F8BBD0",
    clr: this.dark
  },
  {
    name: "brown3",
    code: "#F48FB1",
    clr: this.dark
  },
  {
    name: "brown4",
    code: "#F06292",
    clr: this.dark
  },
  {
    name: "brown5",
    code: "#EC407A",
    clr: this.lite
  },
  {
    name: "brown7",
    code: "#D81B60",
    clr: this.lite
  },
  {
    name: "brown8",
    code: "#C2185B",
    clr: this.lite
  },
  {
    name: "brown9",
    code: "#AD1457",
    clr: this.lite
  },
  {
    name: "brown10",
    code: "#880E4F",
    clr: this.lite
  }];


  grey = [{
    name: "grey",
    code: "#9E9E9E",
    clr: this.lite
  },
  {
    name: "grey1",
    code: "#FAFAFA",
    clr: this.dark
  },
  {
    name: "grey2",
    code: "#F5F5F5",
    clr: this.dark
  },
  {
    name: "grey3",
    code: "#EEEEEE",
    clr: this.dark
  },
  {
    name: "grey4",
    code: "#E0E0E0",
    clr: this.dark
  },
  {
    name: "grey5",
    code: "#BDBDBD",
    clr: this.dark
  },
  {
    name: "grey7",
    code: "#757575",
    clr: this.lite
  },
  {
    name: "grey8",
    code: "#616161",
    clr: this.lite
  },
  {
    name: "grey9",
    code: "#424242",
    clr: this.lite
  },
  {
    name: "grey10",
    code: "#212121",
    clr: this.lite
  }];


  blueGrey = [{
    name: "blueGrey",
    code: "#607D8B",
    clr: this.lite
  },
  {
    name: "blueGrey1",
    code: "#ECEFF1",
    clr: this.dark
  },
  {
    name: "blueGrey2",
    code: "#CFD8DC",
    clr: this.dark
  },
  {
    name: "blueGrey3",
    code: "#B0BEC5",
    clr: this.dark
  },
  {
    name: "blueGrey4",
    code: "#90A4AE",
    clr: this.dark
  },
  {
    name: "blueGrey5",
    code: "#78909C",
    clr: this.lite
  },
  {
    name: "blueGrey7",
    code: "#546E7A",
    clr: this.lite
  },
  {
    name: "blueGrey8",
    code: "#455A64",
    clr: this.lite
  },
  {
    name: "blueGrey9",
    code: "#37474F",
    clr: this.lite
  },
  {
    name: "blueGrey10",
    code: "#263238",
    clr: this.lite
  }];

  black = [{
    name: "black",
    code: "#000000",
    clr: this.lite
  }];

  white = [{
    name: "white",
    code: "#ffffff",
    clr: this.dark
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
