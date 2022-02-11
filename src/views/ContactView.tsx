import ViewLayout from '../components/ViewLayout'

const Footer = () => <p>© 2021 logicpop. ABN 51 329 039 302</p>

function ContactView() {
  return (
    <ViewLayout customFooter={<Footer />}>
      <div>this is last page</div>
    </ViewLayout>
  )
}

export default ContactView
