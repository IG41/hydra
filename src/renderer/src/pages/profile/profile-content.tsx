import { UserProfile } from "@types";
import cn from "classnames";
import * as styles from "./profile.css";
import { SPACING_UNIT, vars } from "@renderer/theme.css";

export interface ProfileContentProps {
  userProfile: UserProfile;
}

export const ProfileContent = ({ userProfile }: ProfileContentProps) => {
  return (
    <>
      <section className={styles.profileContentBox}>
        <img
          alt={userProfile.username + " profile image"}
          className={styles.profileAvatar}
          src="https://cdn.losbroxas.org/3918aa27-9b96-4fdf-b066-4c545d6667ab.png"
        />

        <div className={styles.profileInformation}>
          <h3 style={{ fontWeight: "bold" }}>{userProfile.username}</h3>
        </div>
      </section>

      <div className={styles.profileContent}>
        <div className={styles.profileGameSection}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: `${SPACING_UNIT * 2}px`,
            }}
          >
            <h2>Feed</h2>

            <div
              style={{
                flex: 1,
                backgroundColor: vars.color.border,
                height: "1px",
              }}
            />
            <h3 style={{ fontWeight: "400" }}>
              {userProfile.recentGames.length}
            </h3>
          </div>
          <div
            className={styles.profileContentBox}
            style={{ flexDirection: "column" }}
          >
            {userProfile.recentGames.map((game) => {
              return (
                <div key={game.objectID}>
                  <img
                    src={game.iconUrl}
                    width={50}
                    height={50}
                    alt={"Icon for " + game.title}
                  />
                  <p>{game.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cn(styles.contentSidebar, styles.profileGameSection)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: `${SPACING_UNIT * 2}px`,
            }}
          >
            <h2>Games</h2>
            <div
              style={{
                flex: 1,
                backgroundColor: vars.color.border,
                height: "1px",
              }}
            />
            <h3 style={{ fontWeight: "400" }}>
              {userProfile.libraryGames.length}
            </h3>
          </div>
          <div
            className={styles.profileContentBox}
            style={{ flexDirection: "column" }}
          >
            {userProfile.libraryGames.map((game) => {
              return (
                <div key={game.objectID}>
                  <img
                    src={game.iconUrl}
                    width={50}
                    height={50}
                    alt={"Icon for " + game.title}
                  />
                  <p>{game.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
