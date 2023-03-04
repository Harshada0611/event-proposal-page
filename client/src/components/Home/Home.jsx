import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "../../helpers/axios";
import './Home.css';

const Home = ({ setDetails, setSelected, selected }) => {
    const [proposals, setProposals] = useState([]);
    const [data, setData] = useState({ attribute: 'place', page: 1, search: "" })

    const fetchProposals = async () => {
        try {
            let url = `/proposal/all/?page=${data.page}`
            const token = localStorage.getItem('token');
            const response = await axios(url, {
                headers: {
                    authorization: token
                }
            })
            console.log(response.data)
            setProposals(response.data.proposals);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSelected = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('/user/selected', {
                headers: {
                    authorization: token
                }
            })
            setSelected(data.selected)
        } catch (e) {
            console.log(e);
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(`/proposal/all/?search=${data.search}&attribute=${data.attribute}`, {
                headers: {
                    authorization: token
                }
            })
            setProposals(response.data.proposals)
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchProposals();
        fetchSelected()
        // eslint-disable-next-line
    }, [data.page]);
    return (
        <>
            <section className="banner"></section>
            <section className="main-section">
                {selected !== null && <section className="selected-container">
                    <h2 className="proposal-heading">Selected</h2>
                    <Card proposal={selected} setDetails={setDetails} selected={true} setSelected={setSelected} />
                </section>}
                <section className="proposal-container">
                    <h2 className="proposal-heading">Proposals</h2>
                    <form onSubmit={handleSearch} className='search-bar'>
                                <div className="input-container">
                                    <select
                                        name="attribute"
                                        id="attribute"
                                        required
                                        value={data.attribute}
                                        onChange={(e) => setData({ ...data, attribute: e.target.value })}
                                    >
                                        <option value="place">Place</option>
                                        <option value="proposalType">Proposal Type</option>
                                        <option value="eventType">Event Type</option>
                                        <option value="name">Name</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Enter what to search"
                                        id='search'
                                        name='search'
                                        required
                                        value={data.search}
                                        autoComplete="off"
                                        onChange={(e) => setData({ ...data, search: e.target.value })}
                                    />
                                    <button>Search</button>
                                    <button onClick={(e) => { e.preventDefault(); setData({ attribute: "place", search: "", page: 1 }); fetchProposals() }}>Discard</button>
                                </div>
                            </form>
                    {proposals.length === 0 ? <div><h2 style={{color: 'tomato', textAlign: 'center', opacity: '0.7'}}><span className="rotate">{':('}</span>Sorry, no proposals to show!!</h2></div>
                        :
                        <>
                            <section className="cards-container">
                                {
                                    proposals.map((proposal, index) => {
                                        return (
                                            <Card proposal={proposal} key={index} setDetails={setDetails} />
                                        )
                                    })
                                }
                            </section>
                        </>}
                </section>
                <div className="page-btns">
                    <button disabled={data.page === 1} onClick={() => setData({ ...data, page: data.page - 1 })}>Prev</button>
                    <button disabled={proposals.length === 0} onClick={() => setData({ ...data, page: data.page + 1 })}>Next</button>
                </div>
            </section>
        </>
    )
}

export default Home;