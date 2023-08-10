import { Inter } from 'next/font/google'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import TopTitle from '../components/topBar'
import Navigator from '../components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async() => {
    let todos
    await axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(resp => {
                    todos = resp.data
                })
    return {
        props: {
            todos
        }
    }
}

export default function Home({ todos }) {
  return (
    <>
        <TopTitle/>
        <h1 className='text-2xl font-black text-center'>Todos</h1>  
        {
            todos.map(todo => 
                
                    <Link href={`post/${todo.id}`}>
                        <h1 className='text-xl font-bold'>{todo.title}</h1>
                        <br/>
                    </Link>
                
                ) 

        }
        <Navigator/>
    </>
  )
}





