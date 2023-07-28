import { useQuery } from "@tanstack/react-query";

const Home = () => {

const getData = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    const data = await res.json()

    return data
}   

const query = useQuery({
    queryKey: ['allBeers'],
    queryFn: getData,
})

    return ( <section className="home-container">
        {query.data && query.data.map(beer => <div>{beer.name}</div>)}
    </section> );
}
 
export default Home;