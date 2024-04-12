function parsePagination(pagination) {
    return {
      current_page: pagination.current_page,
      total: pagination.total,
      per_page: pagination.per_page,
    };
  }
  
  export default parsePagination;
  