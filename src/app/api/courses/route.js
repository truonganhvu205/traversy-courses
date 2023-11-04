import { NextResponse } from 'next/server'
import courses from './data.json'
import { v4 as uuidv4 } from 'uuid'

export const GET = async (req) => {
    return NextResponse.json(courses)
}

export const POST = async (req) => {
    const { title, description, level, link } = await req.json()
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    }
    courses.push(newCourse)

    return NextResponse.json(courses)
}