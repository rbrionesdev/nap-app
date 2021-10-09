import React from "react";
import { Pagination } from 'semantic-ui-react'

const OurPagination = ({method, page, setPage, totalPages}) => {
  const handleChange = (e, {page}) => {
    setPage(page)
    method(page)
  }
  return (
    <Pagination 
      boundaryRange={0}
      activePage={page}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={totalPages}
      value={page}
      onPageChange={handleChange}
    />
  )
}

export default OurPagination;