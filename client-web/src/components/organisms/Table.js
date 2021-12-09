import { useTable, usePagination } from 'react-table';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 15
      }
    },
    usePagination
  );

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white rounded-lg border-collapse" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="bg-green-50" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    // TO DO: Fix header title to be centered only for the table and not for the first column also.
                    <th
                      className="px-2 py-1 font-medium text-sm text-left text-green-900 whitespace-nowrap"
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white" {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="px-2 py-1 tracking-wide text-sm whitespace-nowrap"
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white px-4 py-2 rounded-lg shadow-sm flex items-center space-x-4">
        <div className="flex space-x-1">
          <button
            className="bg-white p-0.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="bg-white p-0.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="bg-white p-0.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="bg-white p-0.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4 tracking-wider text-sm text-gray-700">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            Go to page:{' '}
            <input
              type="number"
              className="p-1 border border-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </span>{' '}
          <select
            className="p-1 border border-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:border-gray-300 focus:ring ring-gray-100 tracking-wider"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
