interface Route {
    title: string,
    path: string
}

export const routes: Route[] = [
    {title:'Home', path:'/'},
    {title:'Shop', path:'/shop'},
    {title:'Blog', path:'/blog'},
    {title:'Contact', path:'/contact'},
]