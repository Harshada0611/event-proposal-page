import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Home.css';

const Home = ()=>{
    const [proposals, setProposals] = useState([]);

    const fetchProposals = ()=>{
        try {
            let arr = [
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                }
            ];
            setProposals(arr);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProposals();
        console.log(proposals);
        // eslint-disable-next-line
    }, []);
    return(
        <main className="main-section">
            <section className="banner"></section>
            <h2 className="proposal-heading">Proposals</h2>
            <section className="cards-container">
                {
                    proposals.map((proposal, index)=>{
                        return(
                            <Card proposal={proposal} key={index}/>
                        )
                    })
                }

            </section>

        </main>
    )
}

export default Home;