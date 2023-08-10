import axios from 'axios'
import Head from 'next/head'
import TopTitle from '../components/topBar'
import Navigation from '../components/navigation'

export const getServerSideProps = async({params}) => {
    const postId =  params.id
    let todo
    await axios.get('https://jsonplaceholder.typicode.com/todos/' + postId)
                .then(resp => {
                    todo = resp.data
                    console.log('data got !')
                })
                .catch(e => {
                    todo = {title: 'Title', completed: 'yes', id: 5}
                })
    return {
        props: {
            todo
        }
    }
}


export default function Home({todo}) {
    return (
        <>
            <Head>
                <title>Post {todo.id}</title>
                <meta name='description' content='Post from pulchatt'></meta>  
            </Head>
            <>
                <TopTitle/>
                <div>
                    <h1 className='text-2xl font-black text-center'>{ todo.title }</h1>    
                    <h1 className='text-2xl font-black text-center'>{ todo.completed ? 'Completed' : 'Pending'}</h1>   
                </div>
                <Navigation/>
            </>
        </>
    )
}















