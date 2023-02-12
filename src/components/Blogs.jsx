import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const blogs = [
  {
    title: 'My First Blog',
    description: 'This is a description of my first blog',
    author: 'John Doe',
    date: '2021-01-01'
  },
  {
    title: 'My Second Blog',
    description: 'This is a description of my second blog',
    author: 'Jane Doe',
    date: '2022-02-02'
  },
  {
    title: 'My Third Blog',
    description: 'This is a description of my third blog',
    author: 'John Smith',
    date: '2022-03-03'
  }
];

function Blogs() {
  const years = new Set(blogs.map(blog => blog.date.substring(0, 4)));
  const months = new Set(blogs.map(blog => blog.date.substring(5, 7)));

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          {blogs.map(blog => (
            <IndividualBlog
              key={blog.title}
              title={blog.title}
              description={blog.description}
              author={blog.author}
            />
          ))}
        </Col>
        <Col md={3}>
          <h4>Archive</h4>
          <ListGroup>
            {Array.from(years).map(year => (
              <ListGroup.Item key={year}>
                {year}
                <ListGroup>
                  {Array.from(months).map(month => (
                    <ListGroup.Item key={month}>
                      {month}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

function IndividualBlog({ title, description, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Written by {author}</p>
    </div>
  );
}

export default Blogs;
