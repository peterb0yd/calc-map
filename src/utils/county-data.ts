enum Counties {
    ADAMS = "adams",
    ALAMOSA = "alamosa",
    ARAPAHOE = "arapahoe",
    ARCHULETA = "archuleta",
    BACA = "baca",
    BENT = "bent",
    BOULDER = "boulder",
    BROOMFIELD = "broomfield",
    CHAFFEE = "chaffee",
    CHEYENNE = "cheyenne",
    CLEAR_CREEK = "clear-creek",
    CONEJOS = "conejos",
    COSTILLA = "costilla",
    CROWLEY = "crowley",
    CUSTER = "custer",
    DELTA = "delta",
    DENVER = "denver",
    DOLORES = "dolores",
    DOUGLAS = "douglas",
    EAGLE = "eagle",
    ELBERT = "elbert",
    EL_PASO = "el-paso",
    FREMONT = "fremont",
    GARFIELD = "garfield",
    GILPIN = "gilpin",
    GRAND = "grand",
    GUNNISON = "gunnison",
    HINSDALE = "hinsdale",
    HUERFANO = "huerfano",
    JACKSON = "jackson",
    JEFFERSON = "jefferson",
    KIOWA = "kiowa",
    KIT_CARSON = "kit-carson",
    LAKE = "lake",
    LA_PLATA = "la-plata",
    LARIMER = "larimer",
    LAS_ANIMAS = "las-animas",
    LINCOLN = "lincoln",
    LOGAN = "logan",
    MESA = "mesa",
    MINERAL = "mineral",
    MOFFAT = "moffat",
    MONTEZUMA = "montezuma",
    MONTROSE = "montrose",
    MORGAN = "morgan",
    OTERO = "otero",
    OURAY = "ouray",
    PARK = "park",
    PHILLIPS = "phillips",
    PITKIN = "pitkin",
    PROWERS = "prowers",
    PUEBLO = "pueblo",
    RIO_BLANCO = "rio-blanco",
    RIO_GRANDE = "rio-grande",
    ROUTT = "routt",
    SAGUACHE = "saguache",
    SAN_JUAN = "san-juan",
    SAN_MIGUEL = "san-miguel",
    SEDGWICK = "sedgwick",
    SUMMIT = "summit",
    TELLER = "teller",
    WASHINGTON = "washington",
    WELD = "weld",
    YUMA = "yuma"
  }  

const PANEL_HEIGHT = {
    "Maximum of 10 ft": [Counties.RIO_GRANDE, Counties.DOLORES],
    "Maximum of 15-25 ft": [Counties.GUNNISON, Counties.LAKE, Counties.CLEAR_CREEK, Counties.JEFFERSON, Counties.GILPIN, Counties.ADAMS, Counties.BOULDER, Counties.BROOMFIELD, Counties.LARIMER, Counties.EAGLE, Counties.PITKIN],
    "Maximum of 25 ft or greater": [Counties.MORGAN, Counties.EL_PASO, Counties.HUERFANO, Counties.PUEBLO, Counties.SUMMIT, Counties.PARK, Counties.MOFFAT],
    "No Restriction Specific to Solar": [Counties.WELD, Counties.DENVER, Counties.ARAPAHOE, Counties.DOUGLAS],
    "Determined on a Case-by-Case Basis": [Counties.SAN_MIGUEL, Counties.MONTROSE, Counties.DELTA, Counties.MESA, Counties.RIO_BLANCO, Counties.GARFIELD],
    "Solar Development Under Moratorium": [Counties.CHAFFEE, Counties.OURAY]
}

const CODE_CHARACTERIZATION = {
    "Detailed Solar Land Use Regulations": [Counties.ROUTT, Counties.GARFIELD, Counties.EAGLE, Counties.PITKIN, Counties.LAKE, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.GILPIN, Counties.CLEAR_CREEK, Counties.SUMMIT, Counties.DENVER, Counties.DOUGLAS, Counties.WELD, Counties.MORGAN, Counties.WASHINGTON, Counties.LOGAN, Counties.LARIMER],
    "Some Solar Land Use Regulations": [Counties.GUNNISON, Counties.TELLER, Counties.EL_PASO, Counties.ELBERT, Counties.FREMONT, Counties.PUEBLO, Counties.CROWLEY, Counties.KIOWA, Counties.ALAMOSA, Counties.MINERAL],
    "No Land Use Code Related to Solar": [Counties.RIO_GRANDE, Counties.ARCHULETA, Counties.LA_PLATA, Counties.DOLORES, Counties.SAN_JUAN, Counties.HINSDALE, Counties.OURAY, Counties.SAN_MIGUEL, Counties.MONTEZUMA, Counties.DELTA, Counties.MESA, Counties.RIO_BLANCO],
    "Solar Development Under Moratorium": [Counties.CHAFFEE]
}

const DEFINITIONS = {
    "Solar Specific Definitions": [Counties.MOFFAT, Counties.ROUTT, Counties.JACKSON, Counties.GRAND, Counties.GARFIELD, Counties.EAGLE, Counties.PITKIN, Counties.LAKE, Counties.PARK, Counties.CLEAR_CREEK, Counties.SUMMIT, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.GILPIN, Counties.DENVER, Counties.DOUGLAS, Counties.ELBERT, Counties.EL_PASO, Counties.TELLER, Counties.FREMONT, Counties.PUEBLO, Counties.CROWLEY, Counties.OTERO, Counties.KIOWA, Counties.LAS_ANIMAS, Counties.COSTILLA, Counties.ALAMOSA, Counties.CONEJOS, Counties.RIO_GRANDE, Counties.MINERAL, Counties.HINSDALE, Counties.SAN_JUAN, Counties.ARCHULETA, Counties.LA_PLATA, Counties.MONTEZUMA],
    "Solar and Agrivoltaic Definitions": [Counties.MORGAN],
    "Public Utility Definitions": [Counties.DOLORES, Counties.HUERFANO, Counties.DOUGLAS, Counties.OURAY],
    "No Relevant Definitions": [Counties.SAN_MIGUEL, Counties.MONTEZUMA, Counties.DELTA, Counties.MESA, Counties.RIO_BLANCO]
}

const FENCING = {
    "Solar-Specific Fencing Policy": [Counties.ROUTT, Counties.GARFIELD, Counties.EAGLE, Counties.PITKIN, Counties.GUNNISON, Counties.LAS_ANIMAS, Counties.CROWLEY, Counties.KIOWA, Counties.OTERO, Counties.BACA],
    "Fencing Policy Might Apply to Solar": [Counties.PARK, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.JEFFERSON, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.ARAPAHOE, Counties.DOUGLAS, Counties.EL_PASO, Counties.TELLER, Counties.PUEBLO, Counties.RIO_GRANDE, Counties.MINERAL, Counties.ALAMOSA],
    "No Fencing Policy": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.DOLORES, Counties.SAN_JUAN, Counties.HINSDALE, Counties.OURAY, Counties.MONTEZUMA, Counties.LA_PLATA, Counties.CHAFFEE]
}

const ACRES_MW = {
    "Land Area (acres)": [Counties.GARFIELD, Counties.MOFFAT, Counties.LAS_ANIMAS, Counties.OTERO, Counties.CROWLEY, Counties.KIOWA, Counties.MORGAN],
    "Installed Solar Capacity (MW)": [Counties.GARFIELD, Counties.EAGLE, Counties.PITKIN, Counties.LAKE, Counties.GUNNISON, Counties.PARK, Counties.CHAFFEE, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.JEFFERSON, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.ARAPAHOE, Counties.DENVER, Counties.DOUGLAS, Counties.ELBERT, Counties.EL_PASO, Counties.TELLER, Counties.PUEBLO, Counties.RIO_GRANDE, Counties.MINERAL, Counties.ALAMOSA],
    "Electricity End-Use": [Counties.GARFIELD, Counties.LAS_ANIMAS, Counties.KIOWA, Counties.CROWLEY, Counties.OTERO, Counties.MOFFAT, Counties.RIO_BLANCO],
    "No Categorization": [Counties.SAN_MIGUEL, Counties.DOLORES, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.RIO_BLANCO]
}

const SOLAR_ON_AG_LAND = {
    "Allowed with Appropriate Permit": [Counties.MOFFAT, Counties.ROUTT, Counties.GARFIELD, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.DOLORES, Counties.SAN_JUAN, Counties.OURAY, Counties.HINSDALE, Counties.GUNNISON, Counties.PITKIN, Counties.EAGLE, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.LARIMER, Counties.WELD, Counties.MORGAN, Counties.WASHINGTON, Counties.LOGAN, Counties.PHILLIPS, Counties.YUMA, Counties.KIT_CARSON, Counties.CHEYENNE, Counties.LINCOLN, Counties.ELBERT, Counties.DOUGLAS, Counties.JEFFERSON, Counties.PARK, Counties.LAKE, Counties.CHAFFEE, Counties.FREMONT, Counties.SAGUACHE, Counties.MINERAL, Counties.RIO_GRANDE, Counties.ALAMOSA, Counties.COSTILLA, Counties.CONEJOS, Counties.ARCHULETA, Counties.LA_PLATA, Counties.MONTEZUMA, Counties.LAS_ANIMAS],
    "Specific Policies Protecting Agricultural Land": [Counties.BOULDER, Counties.BROOMFIELD, Counties.DENVER, Counties.ADAMS, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.DOUGLAS, Counties.ELBERT, Counties.WELD, Counties.MORGAN, Counties.WASHINGTON, Counties.LOGAN, Counties.YUMA, Counties.KIT_CARSON, Counties.PHILLIPS, Counties.SEDGWICK],
    "Not Allowed": [Counties.FREMONT, Counties.CROWLEY, Counties.KIOWA],
    "No Zoned or Designated Agricultural Lands": [Counties.RIO_BLANCO, Counties.CUSTER],
    "Solar Development Under Moratorium": [Counties.CHAFFEE]
}

const PERMIT_1041_OUTPUT = {
    "Land Area (acres)": [Counties.PITKIN, Counties.LA_PLATA],
    "Installed Capacity (MW)": [Counties.GUNNISON, Counties.HUERFANO, Counties.OTERO, Counties.CROWLEY],
    "Development on Irrigated Land": [Counties.SAGUACHE, Counties.BENT, Counties.KIOWA],
    "Required with No Minimum Acreage or Capacity": [Counties.GRAND, Counties.SUMMIT],
    "No Applicable 1041 Regulations": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.DOLORES, Counties.SAN_JUAN, Counties.OURAY, Counties.HINSDALE, Counties.ARCHULETA, Counties.CONEJOS, Counties.COSTILLA, Counties.MINERAL, Counties.LAS_ANIMAS, Counties.BACA]
}

const VEGETATION_MANAGEMENT = {
    "Solar-Specific Vegetation Management Policy": [Counties.EAGLE, Counties.GILPIN, Counties.CLEAR_CREEK, Counties.SUMMIT, Counties.BOULDER, Counties.BROOMFIELD, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.DENVER, Counties.ADAMS, Counties.MORGAN, Counties.WASHINGTON, Counties.KIT_CARSON, Counties.CHEYENNE],
    "Vegetation Management Policy Might Apply to Solar": [Counties.PUEBLO, Counties.CROWLEY, Counties.OTERO, Counties.DOLORES, Counties.SAN_JUAN, Counties.LA_PLATA],
    "No Vegetation Management Policy": [Counties.ROUTT, Counties.GARFIELD, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.OURAY, Counties.HINSDALE, Counties.MINERAL, Counties.ARCHULETA, Counties.CONEJOS, Counties.COSTILLA, Counties.RIO_GRANDE, Counties.ALAMOSA, Counties.FREMONT]
}

const VISUAL_IMPACTS = {
    "Solar-Specific Visual Impact Policy": [Counties.EAGLE, Counties.GILPIN, Counties.CLEAR_CREEK, Counties.SUMMIT, Counties.BOULDER, Counties.BROOMFIELD, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.DOUGLAS, Counties.DENVER, Counties.ADAMS, Counties.MORGAN, Counties.WASHINGTON, Counties.KIT_CARSON, Counties.CHEYENNE],
    "Visual Impact Policy Might Apply to Solar": [Counties.PUEBLO, Counties.CROWLEY, Counties.OTERO, Counties.DOLORES, Counties.SAN_JUAN, Counties.LA_PLATA],
    "No Visual Impact Policy": [Counties.ROUTT, Counties.GARFIELD, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.OURAY, Counties.HINSDALE, Counties.MINERAL, Counties.ARCHULETA, Counties.CONEJOS, Counties.COSTILLA, Counties.RIO_GRANDE, Counties.ALAMOSA, Counties.FREMONT]
}

const DECOMMISSIONING_BOND = {
    "Solar-Specific Financial Assurance Requirement": [Counties.EAGLE, Counties.GILPIN, Counties.CLEAR_CREEK, Counties.SUMMIT, Counties.BOULDER, Counties.BROOMFIELD, Counties.ARAPAHOE, Counties.JEFFERSON, Counties.DOUGLAS, Counties.DENVER, Counties.ADAMS, Counties.MORGAN, Counties.WASHINGTON, Counties.KIT_CARSON, Counties.CHEYENNE],
    "Financial Assurance Requirement Might Apply to Solar": [Counties.PUEBLO, Counties.CROWLEY, Counties.OTERO, Counties.DOLORES, Counties.SAN_JUAN, Counties.LA_PLATA],
    "No Financial Assurance Requirement": [Counties.ROUTT, Counties.GARFIELD, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL, Counties.OURAY, Counties.HINSDALE, Counties.MINERAL, Counties.ARCHULETA, Counties.CONEJOS, Counties.COSTILLA, Counties.RIO_GRANDE, Counties.ALAMOSA, Counties.FREMONT]
}

const NON_CSG_DEPLOYED_SOLAR = {
    "0 MW": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.JACKSON, Counties.SAN_JUAN, Counties.HINSDALE, Counties.MINERAL, Counties.DOLORES, Counties.COSTILLA, Counties.CONEJOS, Counties.BENT, Counties.PROWERS, Counties.KIOWA, Counties.CHEYENNE, Counties.KIT_CARSON, Counties.SEDGWICK, Counties.YUMA, Counties.WASHINGTON, Counties.PHILLIPS, Counties.SEDGWICK, Counties.LINCOLN, Counties.ELBERT, Counties.DOUGLAS, Counties.PARK, Counties.TELLER, Counties.CUSTER, Counties.HUERFANO, Counties.LAS_ANIMAS, Counties.ARCHULETA],
    "< 50 MW": [Counties.GARFIELD, Counties.MESA, Counties.DELTA, Counties.MONTROSE, Counties.OURAY, Counties.SAN_MIGUEL, Counties.MINERAL, Counties.RIO_GRANDE, Counties.SAGUACHE, Counties.FREMONT, Counties.CHAFFEE, Counties.LAKE, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.ARAPAHOE, Counties.DENVER, Counties.JEFFERSON, Counties.EL_PASO, Counties.CROWLEY, Counties.BACA],
    "50 MW - 100 MW": [Counties.LARIMER, Counties.WELD, Counties.MORGAN, Counties.PUEBLO, Counties.EL_PASO],
    "100 MW - 150 MW": [Counties.ALAMOSA],
    "> 150 MW": [Counties.PUEBLO]
}

const CSG_DEPLOYED_SOLAR = {
    "0 MW": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.MESA, Counties.DELTA, Counties.MONTROSE, Counties.OURAY, Counties.SAN_JUAN, Counties.DOLORES, Counties.SAN_MIGUEL, Counties.HINSDALE, Counties.MINERAL, Counties.RIO_GRANDE, Counties.CONEJOS, Counties.COSTILLA, Counties.BACA, Counties.BENT, Counties.PROWERS, Counties.KIOWA, Counties.CHEYENNE, Counties.KIT_CARSON, Counties.SEDGWICK, Counties.YUMA, Counties.WASHINGTON, Counties.PHILLIPS, Counties.LINCOLN, Counties.ELBERT, Counties.DOUGLAS, Counties.PARK, Counties.TELLER, Counties.CUSTER, Counties.HUERFANO, Counties.LAS_ANIMAS, Counties.ARCHULETA],
    "< 5 MW": [Counties.GARFIELD, Counties.LA_PLATA, Counties.FREMONT, Counties.CHAFFEE, Counties.LAKE, Counties.PITKIN, Counties.GUNNISON, Counties.EAGLE, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.DENVER, Counties.EL_PASO, Counties.CROWLEY, Counties.OTERO],
    "5 MW - 10 MW": [Counties.LARIMER, Counties.WELD, Counties.MORGAN, Counties.PUEBLO, Counties.EL_PASO, Counties.RIO_GRANDE, Counties.ALAMOSA],
    "> 10 MW": [Counties.LOGAN, Counties.MORGAN, Counties.ADAMS, Counties.WELD]
}

const DECISION_FACTOR = {
    "Land Area (acres)": [Counties.GARFIELD, Counties.MESA, Counties.SAN_JUAN, Counties.MONTEZUMA, Counties.DOLORES, Counties.SAN_MIGUEL, Counties.OURAY, Counties.HINSDALE, Counties.MINERAL, Counties.RIO_GRANDE, Counties.CONEJOS, Counties.COSTILLA, Counties.LA_PLATA, Counties.LAS_ANIMAS, Counties.MONTROSE, Counties.ARCHULETA],
    "Installed Solar Capacity (MW)": [Counties.LARIMER, Counties.LOGAN, Counties.MORGAN, Counties.PUEBLO, Counties.ADAMS, Counties.EL_PASO],
    "Electricity End-Use": [Counties.ROUTT, Counties.GARFIELD, Counties.EAGLE, Counties.GUNNISON, Counties.PITKIN, Counties.LAKE, Counties.CHAFFEE, Counties.PARK, Counties.CLEAR_CREEK, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.JEFFERSON, Counties.DENVER, Counties.ADAMS, Counties.ARAPAHOE, Counties.DOUGLAS, Counties.ELBERT, Counties.FREMONT, Counties.CUSTER, Counties.PUEBLO, Counties.CROWLEY, Counties.KIOWA, Counties.OTERO, Counties.BENT, Counties.PROWERS],
    "No Categorization": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.DELTA, Counties.MESA, Counties.MONTROSE, Counties.SAN_MIGUEL]
}

const DEPLOYED_SOLAR = {
    "0 MW": [Counties.MOFFAT, Counties.RIO_BLANCO, Counties.MESA, Counties.DELTA, Counties.MONTROSE, Counties.OURAY, Counties.SAN_JUAN, Counties.DOLORES, Counties.SAN_MIGUEL, Counties.HINSDALE, Counties.MINERAL, Counties.RIO_GRANDE, Counties.CONEJOS, Counties.COSTILLA, Counties.BACA, Counties.BENT, Counties.PROWERS, Counties.KIOWA, Counties.CHEYENNE, Counties.KIT_CARSON, Counties.SEDGWICK, Counties.YUMA, Counties.WASHINGTON, Counties.PHILLIPS, Counties.LINCOLN, Counties.ELBERT, Counties.DOUGLAS, Counties.PARK, Counties.TELLER, Counties.CUSTER, Counties.HUERFANO, Counties.LAS_ANIMAS, Counties.ARCHULETA],
    "< 5 MW": [Counties.GARFIELD, Counties.LA_PLATA, Counties.FREMONT, Counties.CHAFFEE, Counties.LAKE, Counties.PITKIN, Counties.GUNNISON, Counties.EAGLE, Counties.SUMMIT, Counties.CLEAR_CREEK, Counties.GILPIN, Counties.BOULDER, Counties.BROOMFIELD, Counties.ADAMS, Counties.DENVER, Counties.EL_PASO, Counties.CROWLEY, Counties.OTERO],
    "5 MW - 10 MW": [Counties.LARIMER, Counties.WELD, Counties.MORGAN, Counties.PUEBLO, Counties.EL_PASO, Counties.RIO_GRANDE, Counties.ALAMOSA],
    "> 10 MW": [Counties.LOGAN, Counties.MORGAN, Counties.ADAMS, Counties.WELD]
}

export const mapData = { 
    panelHeight: PANEL_HEIGHT,
    codeCharacterization: CODE_CHARACTERIZATION,
    definitions: DEFINITIONS,   
    fencing: FENCING,
    acresMW: ACRES_MW,
    solarOnAgLand: SOLAR_ON_AG_LAND,
    permit1041Output: PERMIT_1041_OUTPUT,
    vegetationManagement: VEGETATION_MANAGEMENT,
    visualImpacts: VISUAL_IMPACTS,
    decommissioningBond: DECOMMISSIONING_BOND,
    nonCSGDeployedSolar: NON_CSG_DEPLOYED_SOLAR,
    csgDeployedSolar: CSG_DEPLOYED_SOLAR,
    decisionFactor: DECISION_FACTOR,
    deployedSolar: DEPLOYED_SOLAR
}