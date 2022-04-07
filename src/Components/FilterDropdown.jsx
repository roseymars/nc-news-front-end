const FilterDropdown = ({ setOrderBy, setSortBy, sortBy, orderBy }) => {
    // const [filteredArticles, setFilteredArticles] = useState([])


    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const handleOrderBy = (e) => {
        setOrderBy(e.target.value)
    }

    return (
        <form>
            <label> Sort By: </label>
        <select className="dropdown-sort-by" value={sortBy} onChange={handleSortBy}>
      <option value="author">Author</option>
      <option value="created_at">Date published</option>
        <option value="votes">Likes</option>
      </select>
      <label>Order By: </label>
      <select className="dropdown-order-by" value={orderBy} onChange={handleOrderBy}>
          <option value="ASC"> Ascending </option>
          <option value="DESC">Descending</option>
      </select>
      </form>
    )
}

export default FilterDropdown;