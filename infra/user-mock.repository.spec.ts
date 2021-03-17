import { UserMockRepository } from "./user-mock.repository";

it('verify getAllUsers', () => {
    // Arrange

    let component: UserMockRepository

    component = new UserMockRepository()

    let users = component.users

    // Assert
    // expect(users).toBe(component.getAllUsers());
}); 