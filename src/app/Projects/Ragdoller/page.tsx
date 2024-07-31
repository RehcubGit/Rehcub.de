export default function Ragdoller() {
  return (
    <div>
      <h1>Ragdoller</h1>
      <p>
        Ragdoller is a chaotic and fun 2D ragdoll fighting game where players
        become fearless stick figure warriors battling waves of increasingly
        wacky enemies in hilarious, physics-driven combat. After each victory,
        players upgrade their fighter with special stat-boosting cards chosen
        from a random pool of three, keeping the gameplay fresh and
        unpredictable.
      </p>
      <h3>Gameplay</h3>
      <p>
        To damage your opponent, you must hit a part of their body that is
        vulnerable.&nbsp;This includes the torso (except for arms and legs) and
        the head.&nbsp;Parts that do damage are the Head and the end of your
        Limbs.
      </p>
      <p>
        Every time you land a successful hit on your opponent, your combo
        counter increases by 1.&nbsp;The more hits you land in a combo, the more
        damage you will do.&nbsp;If you get hit by your opponent, your combo
        counter will be reset.
      </p>
      <p>
        The remaining health of each player is displayed on their head as a
        black dot.&nbsp;
      </p>
      <p>
        In general, it is a good idea to avoid rushing headfirst into a
        fight.&nbsp;This will leave you open to being hit, and it will make it
        difficult to land combos.&nbsp;A good strategy is to use your legs to
        attack your opponent's head.
      </p>
      <p></p>
      <h3>Stats</h3>
      <p>
        Armor:&nbsp;Blocks a Maximum 20 Damage. Until Wave 20 there is no Enemy
        that deals more than 20 Damage.&nbsp;An Armor hit does not reset your
        Combo.
      </p>
      <p>Damage Reflect and Life Leech: Are capped at 100%.</p>
      <p>
        Luck:&nbsp;&nbsp;increases the chance for on Hit Effects
        and&nbsp;Improves the Tier of Cards&nbsp;found
      </p>
      <p>The rest is pretty much self explanatory.</p>
      <h3>Difficulty</h3>
      <ul>
        <li>
          <strong>Easy</strong>
          <ul>
            <li>+20% Speed, Health and Damage</li>
            <li>3 Rerolls</li>
          </ul>
        </li>
        <li>
          <strong>Normal</strong>
          <ul>
            <li>Unchanged Stats</li>
            <li>2 Rerolls</li>
          </ul>
        </li>
        <li>
          <strong>Hard</strong>
          <ul>
            <li>-20% Speed, Health and Damage</li>
            <li>1 Reroll</li>
          </ul>
        </li>
        <li>
          <strong>Impossible</strong>
          <ul>
            <li>-40% Speed, Health and Damage</li>
            <li>0 Rerolls</li>
          </ul>
        </li>
      </ul>
      <h3>Controls</h3>
      <p>
        You Control the Head of your Stickman with the Left Stick or the Arrow
        Keys.
      </p>
      <p></p>
      <h3>Demo</h3>
      <p>The demo is limited to Wave 10.</p>
      <p></p>
      <p>
        If you find bugs, have suggestions or questions, email me:
        <a href="mailto:rehcub@gmx.de"> rehcub@gmx.de </a>
        or join my&nbsp;
        <a href="https://discord.gg/B9uceFXMpd" target="_blank">
          Discord
        </a>
      </p>
    </div>
  );
}
