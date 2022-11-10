
type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
    
    const container_styles = {
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        height: '100%'        
    }

  return (
    <section style={container_styles}>
        {children}
    </section>
  )
}

export default Container