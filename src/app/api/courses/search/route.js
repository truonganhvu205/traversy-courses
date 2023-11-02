import { NextResponse } from "next/server";
import courses from '../data.json'

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')
    const filterCourses = courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))

    return NextResponse.json(filterCourses)
}