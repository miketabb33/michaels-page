import React from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import ProfileInfo from '../components/profile-info/ProfileInfo'

const Flex = styled.div`
  display: flex;
  height: 100%;
`

const ContentWell = styled.div`
  width: 100%;
  overflow-y: auto;
`
const ProfileAside = styled.div`
  width: 45rem;
`

const HomePage = () => {
  usePage({ title: 'Home' })
  return (
    <NavLayout>
      <Flex>
        <ContentWell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Id diam maecenas ultricies mi eget mauris. In eu mi bibendum neque egestas congue quisque
          egestas diam. Faucibus purus in massa tempor nec feugiat. Quisque id diam vel quam elementum pulvinar etiam
          non quam. Non nisi est sit amet. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Sed id
          semper risus in. Leo duis ut diam quam. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Id nibh
          tortor id aliquet lectus proin. Nunc sed id semper risus. Amet porttitor eget dolor morbi non arcu risus. In
          egestas erat imperdiet sed euismod nisi. Tortor id aliquet lectus proin. Dignissim suspendisse in est ante in
          nibh mauris cursus mattis. Quis ipsum suspendisse ultrices gravida. Adipiscing tristique risus nec feugiat in
          fermentum posuere urna nec. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Tristique senectus et
          netus et malesuada fames ac turpis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Egestas
          maecenas pharetra convallis posuere morbi leo. Consequat semper viverra nam libero justo laoreet. Odio aenean
          sed adipiscing diam donec adipiscing tristique risus nec. Adipiscing tristique risus nec feugiat in fermentum
          posuere. Orci sagittis eu volutpat odio facilisis mauris sit amet. At tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Sagittis aliquam malesuada bibendum arcu. Purus semper eget duis at tellus at urna
          condimentum mattis. Sit amet tellus cras adipiscing enim eu turpis egestas. Scelerisque eleifend donec pretium
          vulputate sapien nec. Quis ipsum suspendisse ultrices gravida dictum. Massa ultricies mi quis hendrerit. At
          lectus urna duis convallis convallis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.
          Auctor urna nunc id cursus metus aliquam eleifend. Nec sagittis aliquam malesuada bibendum arcu vitae
          elementum curabitur vitae. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Et malesuada
          fames ac turpis egestas sed tempus urna. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
          Consequat nisl vel pretium lectus quam id leo in. Semper quis lectus nulla at volutpat diam ut venenatis
          tellus. Interdum varius sit amet mattis vulputate enim. Donec et odio pellentesque diam volutpat. Nibh cras
          pulvinar mattis nunc sed blandit libero volutpat sed. Faucibus purus in massa tempor. Urna id volutpat lacus
          laoreet non curabitur gravida arcu ac. Vehicula ipsum a arcu cursus vitae congue. Quam adipiscing vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Velit sed ullamcorper morbi tincidunt ornare. Ut enim blandit
          volutpat maecenas volutpat blandit aliquam etiam. Est ullamcorper eget nulla facilisi etiam. Fermentum iaculis
          eu non diam phasellus vestibulum. Sit amet est placerat in egestas erat imperdiet sed. Aliquam sem fringilla
          ut morbi. Nibh ipsum consequat nisl vel pretium lectus. Pretium fusce id velit ut tortor. Eget egestas purus
          viverra accumsan in. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Amet nisl purus in
          mollis nunc. Nunc mattis enim ut tellus elementum sagittis vitae. Volutpat est velit egestas dui id ornare
          arcu odio. In pellentesque massa placerat duis ultricies lacus sed. Faucibus ornare suspendisse sed nisi lacus
          sed viverra tellus in. Massa eget egestas purus viverra. Ipsum dolor sit amet consectetur. Faucibus a
          pellentesque sit amet porttitor eget. Consequat id porta nibh venenatis cras sed. Sit amet aliquam id diam
          maecenas ultricies mi eget mauris. Tristique senectus et netus et. Aliquet bibendum enim facilisis gravida
          neque convallis. Volutpat ac tincidunt vitae semper. Sapien faucibus et molestie ac feugiat sed. Eget mi proin
          sed libero enim sed faucibus. Ut tellus elementum sagittis vitae. Vehicula ipsum a arcu cursus. Quis risus sed
          vulputate odio ut. Eget gravida cum sociis natoque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris.
          In eu mi bibendum neque egestas congue quisque egestas diam. Faucibus purus in massa tempor nec feugiat.
          Quisque id diam vel quam elementum pulvinar etiam non quam. Non nisi est sit amet. Enim eu turpis egestas
          pretium aenean pharetra magna ac placerat. Sed id semper risus in. Leo duis ut diam quam. Vitae tortor
          condimentum lacinia quis vel eros donec ac odio. Id nibh tortor id aliquet lectus proin. Nunc sed id semper
          risus. Amet porttitor eget dolor morbi non arcu risus. In egestas erat imperdiet sed euismod nisi. Tortor id
          aliquet lectus proin. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Quis ipsum suspendisse
          ultrices gravida. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi. Tristique senectus et netus et malesuada fames ac turpis. In
          fermentum et sollicitudin ac orci phasellus egestas tellus. Egestas maecenas pharetra convallis posuere morbi
          leo. Consequat semper viverra nam libero justo laoreet. Odio aenean sed adipiscing diam donec adipiscing
          tristique risus nec. Adipiscing tristique risus nec feugiat in fermentum posuere. Orci sagittis eu volutpat
          odio facilisis mauris sit amet. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sagittis aliquam
          malesuada bibendum arcu. Purus semper eget duis at tellus at urna condimentum mattis. Sit amet tellus cras
          adipiscing enim eu turpis egestas. Scelerisque eleifend donec pretium vulputate sapien nec. Quis ipsum
          suspendisse ultrices gravida dictum. Massa ultricies mi quis hendrerit. At lectus urna duis convallis
          convallis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Auctor urna nunc id cursus
          metus aliquam eleifend. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Viverra
          orci sagittis eu volutpat odio facilisis mauris sit amet. Et malesuada fames ac turpis egestas sed tempus
          urna. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Consequat nisl vel pretium lectus quam
          id leo in. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Interdum varius sit amet mattis
          vulputate enim. Donec et odio pellentesque diam volutpat. Nibh cras pulvinar mattis nunc sed blandit libero
          volutpat sed. Faucibus purus in massa tempor. Urna id volutpat lacus laoreet non curabitur gravida arcu ac.
          Vehicula ipsum a arcu cursus vitae congue. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
          urna. Velit sed ullamcorper morbi tincidunt ornare. Ut enim blandit volutpat maecenas volutpat blandit aliquam
          etiam. Est ullamcorper eget nulla facilisi etiam. Fermentum iaculis eu non diam phasellus vestibulum. Sit amet
          est placerat in egestas erat imperdiet sed. Aliquam sem fringilla ut morbi. Nibh ipsum consequat nisl vel
          pretium lectus. Pretium fusce id velit ut tortor. Eget egestas purus viverra accumsan in. In aliquam sem
          fringilla ut morbi tincidunt augue interdum velit. Amet nisl purus in mollis nunc. Nunc mattis enim ut tellus
          elementum sagittis vitae. Volutpat est velit egestas dui id ornare arcu odio. In pellentesque massa placerat
          duis ultricies lacus sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Massa eget egestas
          purus viverra. Ipsum dolor sit amet consectetur. Faucibus a pellentesque sit amet porttitor eget. Consequat id
          porta nibh venenatis cras sed. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Tristique senectus
          et netus et. Aliquet bibendum enim facilisis gravida neque convallis. Volutpat ac tincidunt vitae semper.
          Sapien faucibus et molestie ac feugiat sed. Eget mi proin sed libero enim sed faucibus. Ut tellus elementum
          sagittis vitae. Vehicula ipsum a arcu cursus. Quis risus sed vulputate odio ut. Eget gravida cum sociis
          natoque.
        </ContentWell>
        <ProfileAside>
          <ProfileInfo />
        </ProfileAside>
      </Flex>
    </NavLayout>
  )
}

export default HomePage
