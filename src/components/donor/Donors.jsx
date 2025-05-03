import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import styles from "./donor.module.css";
import { api } from "../../db/api";
import Loading from "../loading/loading";
import DonorCard from "./donorCard/donorCard";
import DonorModal from "./donorModal/DonorModal";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// Main copmnent start
const Donors = () => {
  const [searchParams] = useSearchParams();
  const bloodGroup = searchParams.get("bloodGroup");
  const thana = searchParams.get("thana");

  const [donorData, setDonorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    activeOnly: false,
    onlyHealthy: false,
    gender: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [donorId, setDonorId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Pagination & serach query
  useEffect(() => {
    const fetchDonorData = async () => {
      setIsLoading(true);
      try {
        let query = `${api}/donors?page=${currentPage}`;
        if (bloodGroup) query += `&bloodGroup=${bloodGroup}`;
        if (thana) query += `&thana=${thana}`;

        const res = await fetch(query);
        const data = await res.json();
        setDonorData(data?.data || []);
        setTotalPages(data?.totalPages || 1);
      } catch (err) {
        console.error("Error fetching donor data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonorData();
  }, [bloodGroup, thana, currentPage]);


  // In page search function
  const handleSearch = debounce((value) => {
    setSearchQuery(value.toLowerCase());
  }, 300);

  const filteredDonors = useMemo(() => {
    return donorData
      .filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery) ||
          d.address.toLowerCase().includes(searchQuery)
      )
      .filter((d) =>
        filters.activeOnly ? d.donationStatus === "active" : true
      )
      .filter((d) => (filters.onlyHealthy ? !d.isSeak : true))
      .filter((d) => (filters.gender ? d.gender === filters.gender : true));
  }, [donorData, searchQuery, filters]);

  const clearFilters = () => {
    setFilters({ activeOnly: false, onlyHealthy: false, gender: "" });
    setSearchQuery("");
  };

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.donorCont}>
            <div className={styles.donorHead}>
              <div className={styles.areaInfo}>
                {bloodGroup && <h2>Blood-Group: {bloodGroup}</h2>}
                {thana && <h2>Area: {thana}</h2>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search by name/address"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.listControll}>
              <div className={styles.filters}>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.activeOnly}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        activeOnly: !prev.activeOnly,
                      }))
                    }
                  />
                  Active Only
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={filters.onlyHealthy}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        onlyHealthy: !prev.onlyHealthy,
                      }))
                    }
                  />
                  Healthy Only
                </label>

                <select
                  value={filters.gender}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                >
                  <option value="">All Genders</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <button onClick={clearFilters}>Clear Filters</button>
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles.donorLists}>
              {filteredDonors.length > 0 ? (
                filteredDonors.map((donor) => (
                  <DonorCard
                    key={donor._id}
                    donor={donor}
                    setDonorId={setDonorId}
                    setModalOpen={setModalOpen}
                  />
                ))
              ) : (
                <p>No donors found</p>
              )}
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    className={`${styles.pageBtn} ${
                      pageNum === currentPage ? styles.activePage : ""
                    }`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                )
              )}
            </div>
          </div>

          <DonorModal
            open={modalOpen}
            setOpen={setModalOpen}
            donorId={donorId}
            setDonorId={setDonorId}
          />
        </>
      )}
    </section>
  );
};

export default Donors;
