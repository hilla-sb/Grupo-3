import React from 'react';
import MisReservas from './MisReservas';

export default function Perfil () {
  return (
    <>
    <img src="" href="" alt="">(LOGO)</img>
    <Table>
      <ul>
        <li>Mi perfil</li>
        <li>Mis reservas <MisReservas/></li>
      </ul>
    </Table>
    <div>
      <Form>
        <Button>Guardar</Button> {/* button opcional */}
      </Form>
    </div>
    </>
  )
}