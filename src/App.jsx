// import { useState } from "react";
import useOneWayDebounce from "./hooks/useOneWayDebounce";
import Drawer from "./Drawer";
import { styled } from "solid-styled-components";
import { createSignal } from "solid-js";

function App() {
  const [isExpandedByHandle, setIsExpandedByHandle] = createSignal(false);
  const [isHoverExpanded, setIsHoverExpanded] = createSignal(false);
  // const debouncedIsHoverExpanded = () =>
  //   useOneWayDebounce(isHoverExpanded(), 400);

  function drawerHandleTrigger(e) {
    setIsExpandedByHandle((prev) => !prev);
  }

  function hoverEnterHandler(e) {
    // console.log("true");
    setIsHoverExpanded(true);
  }

  function hoverLeaveHandler(e) {
    // console.log("false");
    setIsHoverExpanded(false);
  }

  const Wrapper = styled.div`
    background-color: dodgerblue;
    display: flex;
    position: relative;
    top: 40px;
  `;

  const Button = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    height: 40px;
    width: 60px;
  `;

  return (
    <Wrapper>
      <Button onClick={drawerHandleTrigger}>==</Button>
      <Drawer
        // isHoverExpanded={debouncedIsHoverExpanded()}
        isHoverExpanded={isHoverExpanded()}
        isExpandedByHandle={isExpandedByHandle()}
        onMouseEnter={hoverEnterHandler}
        onMouseLeave={hoverLeaveHandler}
      />
      <main>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint velit
        eaque dolores quod. Pariatur odio, totam dolorem a maiores numquam
        officia rerum deserunt ea esse, exercitationem, alias magnam reiciendis
        fugit beatae aut ipsa doloremque eaque excepturi nesciunt dolore
        voluptates? Quae, optio aliquid quidem harum odio, atque tempora
        temporibus veniam quod praesentium nostrum, quia incidunt nesciunt
        molestias inventore architecto earum perferendis laboriosam debitis at
        nulla! Sequi quis totam ratione voluptas delectus nobis, aperiam
        quibusdam qui architecto aliquam quos eos, expedita dignissimos amet
        vitae, omnis ab possimus maxime. Accusamus, numquam reprehenderit eius
        sequi ad illum temporibus porro. Iste dignissimos veniam voluptas
        doloribus voluptatum vero error, tempora corrupti cum qui repellat quasi
        atque rem ullam nostrum quisquam, illum exercitationem assumenda quod,
        explicabo ea! Et culpa ipsa molestias, at non perferendis sit quaerat
        voluptatem est quibusdam aliquid fuga magni expedita libero obcaecati
        omnis nulla, dignissimos quo architecto provident itaque sint voluptatum
        nam corrupti! Nisi exercitationem omnis maxime voluptatibus, distinctio
        beatae non. Ad vero, aliquid nihil provident eius aperiam debitis
        accusantium, nam aspernatur ducimus quidem iste nesciunt earum
        distinctio adipisci possimus maxime quaerat at hic tempore. Sed, ab!
        Voluptatem voluptates ab nobis autem, eligendi nulla, commodi facere
        porro esse culpa dolorum magnam soluta accusamus ipsa alias iste
        explicabo odit nam excepturi fuga consequuntur ut in eos. Nostrum,
        dolores pariatur ad incidunt odit deserunt rem tempore impedit. Ipsam
        atque, voluptas laboriosam voluptatibus laudantium neque itaque
        assumenda consequatur distinctio eveniet corrupti cumque vero, quam
        dolores magni nostrum nulla impedit odit expedita quisquam illo ipsum
        facere quo debitis. Totam, et laudantium eum similique suscipit at
        accusantium atque laborum eligendi odit sequi numquam deserunt vero est
        odio saepe quaerat non. Excepturi officiis cumque distinctio autem
        ducimus ullam officia asperiores? Saepe neque illo necessitatibus in
        sunt perferendis ut voluptatum dignissimos a voluptate deserunt ab
        expedita maxime reiciendis soluta, error esse nulla accusantium! Numquam
        saepe delectus recusandae accusamus dignissimos atque, illum mollitia
        iusto dicta, sequi ad expedita at repudiandae perferendis natus
        blanditiis velit quidem voluptates error. Quis maiores hic laboriosam
        nam nisi odio dignissimos repellat aliquam, accusamus consequuntur
        voluptatibus beatae necessitatibus quam qui quo aliquid esse modi
        perferendis debitis alias fuga magnam quibusdam delectus? Eaque
        necessitatibus rerum exercitationem voluptas veritatis ut molestiae in.
        Laborum sed
      </main>
    </Wrapper>
  );
}

export default App;
