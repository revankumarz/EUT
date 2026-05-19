import { useEffect, useState } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

const Dashboard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const stored = localStorage.getItem('user')
    if (!isLoggedIn || !stored) {
      navigate('/signin', { replace: true })
      return
    }
    setUser(JSON.parse(stored))
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/signin')
  }

  if (!user) return null

  return (
    <Container className="dashboard-container py-5">
      <Card className="dashboard-card mx-auto">
        <Card.Body className="text-center p-4 p-md-5">
          <FaUserCircle size={72} color="#7c3aed" className="mb-3" />
          <h2 className="mb-1">Welcome, {user.fullName}!</h2>
          <p className="text-muted">You have successfully signed in to your DevStack account.</p>

          <Row className="mt-4 text-start">
            <Col sm={6} className="mb-3">
              <div className="info-tile">
                <small className="text-muted d-block">Email</small>
                <strong>{user.email}</strong>
              </div>
            </Col>
            <Col sm={6} className="mb-3">
              <div className="info-tile">
                <small className="text-muted d-block">Phone</small>
                <strong>{user.phone}</strong>
              </div>
            </Col>
          </Row>

          <Button onClick={handleLogout} className="btn-primary-purple mt-3 px-4">
            <FaSignOutAlt className="me-2" /> Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Dashboard