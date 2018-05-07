let style = {
  mainAction: {
    marginBottom: '20px'
  },
  deviceHeader: {
    width: '100%',
    padding: '5px',
    display: 'table-header-group'
  },
  deviceBody: {
    width: '100%'
  },
  deviceRow: {
    display: 'table-row'
  },
  deviceHeaderColumn: {
    backgroundColor: '#95B3D7',
    color: '#ffffff',
    textAlign: 'left'
  },
  lotHeader: {
    width: '100%',
    padding: '5px',
    display: 'table-header-group'
  },
  lotBody: {
    width: '100%'
  },
  lotRow: {
    display: 'table-row'
  },
  expandCollapse: {
    cursor: 'pointer'
  },
  removeLot: {
    color: '#d9534f',
    cursor: 'pointer'
  }
}

style.column = {
  display: 'table-cell',
  padding: '5px'
}

style.packageTypeColumn = {
  ...style.column,
  width: '150px'
}

style.partNumberColumn = {
  ...style.column,
  width: '150px'
}

style.waferNumberColumn = {
  ...style.column,
  textAlign: 'right',
  width: '80px'
}

style.assemblyLotColumn = {
  ...style.column,
  textAlign: 'center',
  width: '120px'
}

style.dateCodeColumn = {
  ...style.column,
  width: '80px'
}

style.quantityColumn = {
  ...style.column,
  textAlign: 'right',
  width: '80px'
}

style.deviceRowHeader = {
  ...style.column,
  width: '30px'
}

style.lotRowHeader = {
  ...style.column,
  width: '65px'
}

style.actionColumn = {
  ...style.column,
  width: '150px'
}

style.packageTypeHeader = {
  ...style.packageTypeColumn,
  ...style.deviceHeaderColumn
};

style.partNumberHeader = {
  ...style.partNumberColumn,
  ...style.deviceHeaderColumn
};

style.waferNumberHeader = {
  ...style.waferNumberColumn,
  ...style.deviceHeaderColumn
};

style.assemblyLotHeader = {
  ...style.assemblyLotColumn,
  ...style.deviceHeaderColumn
};

style.dateCodeHeader = {
  ...style.dateCodeColumn,
  ...style.deviceHeaderColumn
};

style.quantityHeader ={
  ...style.quantityColumn,
  ...style.deviceHeaderColumn
};

style.actionHeader = {
  ...style.actionColumn,
  ...style.deviceHeaderColumn,
  backgroundColor: 'none',
  borderBottom: 'none'
};

export default style
