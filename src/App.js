import { Button } from "./Button/Button";

function App() {
  return (
    <>
      <h1>Recursica meet Chakra</h1>
      <p>
        Chakra UI is an excellent design system framework. This samples shows
        how you can easily update/modify Chakra with the Recursica design
        system.
      </p>
      <h2>Components</h2>
      <h3>Button</h3>
      <table>
        <thead>
          <tr>
            <td>Variant</td>
            <td>Size=xs</td>
            <td>Size=sm</td>
            <td>Size=md</td>
            <td>Size=lg</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solid</td>
            <td><Button variant={'solid'} size={'xs'}>Solid Button</Button></td>
            <td><Button variant={'solid'} size={'sm'}>Solid Button</Button></td>
            <td><Button variant={'solid'} size={'md'}>Solid Button</Button></td>
            <td><Button variant={'solid'} size={'lg'}>Solid Button</Button></td>
          </tr>
          <tr>
            <td>Ghost</td>
            <td><Button variant={'ghost'} size={'xs'}>Ghost Button</Button></td>
            <td><Button variant={'ghost'} size={'sm'}>Ghost Button</Button></td>
            <td><Button variant={'ghost'} size={'md'}>Ghost Button</Button></td>
            <td><Button variant={'ghost'} size={'lg'}>Ghost Button</Button></td>
          </tr>
          <tr>
            <td>Outline</td>
            <td><Button variant={'outline'} size={'xs'}>Outline Button</Button></td>
            <td><Button variant={'outline'} size={'sm'}>Outline Button</Button></td>
            <td><Button variant={'outline'} size={'md'}>Outline Button</Button></td>
            <td><Button variant={'outline'} size={'lg'}>Outline Button</Button></td>
          </tr>
          <tr>
            <td>Link</td>
            <td><Button variant={'link'} size={'xs'}>Link Button</Button></td>
            <td><Button variant={'link'} size={'sm'}>Link Button</Button></td>
            <td><Button variant={'link'} size={'md'}>Link Button</Button></td>
            <td><Button variant={'link'} size={'lg'}>Link Button</Button></td>
          </tr>
          <tr>
            <td>Unstyled</td>
            <td><Button variant={'unstyled'} size={'xs'}>Unstyled Button</Button></td>
            <td><Button variant={'unstyled'} size={'sm'}>Unstyled Button</Button></td>
            <td><Button variant={'unstyled'} size={'md'}>Unstyled Button</Button></td>
            <td><Button variant={'unstyled'} size={'lg'}>Unstyled Button</Button></td>
          </tr>
        </tbody>
      </table>
      <h2>Theme Colors</h2>
      <h2>Theme Typography</h2>
    </>
  );
}

export default App;
