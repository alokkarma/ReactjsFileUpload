import * as React from 'react';

interface Person {
    name: string;
    country: string;
}
const People = ({persons}: { persons: Person[]}) => {
    return(
        <table className="table">
            {persons.map((person: Person, index: number) => (
                <p>Hello, {person.name} from {person.country}!</p>
            ))}
        </table>
    );
};
export default People;