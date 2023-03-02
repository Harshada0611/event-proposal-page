import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "../../helpers/axios";
import './Home.css';

const Home = ({ setDetails, setSelected, selected }) => {
    const [proposals, setProposals] = useState([]);

    const fetchProposals = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios('/proposal/all', {
                headers: {
                    authorization: token
                }
            })
            console.log(data)
            setProposals(data.proposals);
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

    useEffect(() => {
        fetchProposals();
        fetchSelected()
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <section className="banner"></section>
        <section className="main-section">
            {selected !== null && <section className="selected-container">
                <h2 className="proposal-heading">Selected</h2>
                <Card proposal={selected} setDetails={setDetails} />
            </section>}
            <section className="proposal-container">
                <h2 className="proposal-heading">Proposals</h2>
                <section className="cards-container">
                    {
                        proposals.map((proposal, index) => {
                            return (
                                <Card proposal={proposal} key={index} setDetails={setDetails} />
                            )
                        })
                    }

                </section>
            </section>

        </section>
        </>
    )
}

export default Home;