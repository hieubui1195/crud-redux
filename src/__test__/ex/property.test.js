it('will fail every time', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'Bui Hi',
    };
    
    expect(user).toMatchSnapshot();
});

it('will check the matchers and pass', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'Bui Hi',
    };

    expect(user).toMatchSnapshot({
        createdAt: expect.any(Date),
        id: expect.any(Number),
    });
});
