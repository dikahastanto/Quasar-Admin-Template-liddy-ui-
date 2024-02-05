export interface paginateProps {
  pagination: {
    page: number,
    rowsPerPage: number,
    sortBy?: string;
    descending?: boolean;
    rowsNumber?: number;
  },
  filter?: string,
  getCellValue?: (col: never, row: never) => void;
}

export default (paginate: paginateProps, param = {}) => {
  const { page, rowsPerPage, rowsNumber } = paginate.pagination

  return {
    offset: page,
    filter: paginate.filter,
    limit: rowsPerPage === 0 ? rowsNumber : rowsPerPage,
    ...param
  }
}
