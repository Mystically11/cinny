import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar, Box, Icon, Icons, Text } from 'folds';
import { ClientContentLayout } from '../ClientContentLayout';
import { ClientDrawerLayout } from '../ClientDrawerLayout';
import { ClientDrawerHeaderLayout } from '../ClientDrawerHeaderLayout';
import { ClientDrawerContentLayout } from '../ClientDrawerContentLayout';
import { NavCategory, NavItem, NavItemContent, NavLink } from '../../../components/nav';
import { getInboxInvitesPath, getInboxNotificationsPath } from '../../pathUtils';
import {
  useInboxInvitesSelected,
  useInboxNotificationsSelected,
} from '../../../hooks/router/useInbox';

export function Inbox() {
  const notificationsSelected = useInboxNotificationsSelected();
  const invitesSelected = useInboxInvitesSelected();

  return (
    <ClientContentLayout
      navigation={
        <ClientDrawerLayout>
          <ClientDrawerHeaderLayout>
            <Box grow="Yes" gap="300">
              <Box grow="Yes">
                <Text size="H4" truncate>
                  Inbox
                </Text>
              </Box>
            </Box>
          </ClientDrawerHeaderLayout>

          <ClientDrawerContentLayout>
            <Box direction="Column" gap="300">
              <NavCategory>
                <NavItem variant="Background" radii="400" aria-selected={notificationsSelected}>
                  <NavLink to={getInboxNotificationsPath()}>
                    <NavItemContent size="T300">
                      <Box as="span" grow="Yes" alignItems="Center" gap="200">
                        <Avatar size="200" radii="400">
                          <Icon
                            src={Icons.MessageUnread}
                            size="100"
                            filled={notificationsSelected}
                          />
                        </Avatar>
                        <Box as="span" grow="Yes">
                          <Text as="span" size="Inherit" truncate>
                            Notifications
                          </Text>
                        </Box>
                      </Box>
                    </NavItemContent>
                  </NavLink>
                </NavItem>
                <NavItem variant="Background" radii="400" aria-selected={invitesSelected}>
                  <NavLink to={getInboxInvitesPath()}>
                    <NavItemContent size="T300">
                      <Box as="span" grow="Yes" alignItems="Center" gap="200">
                        <Avatar size="200" radii="400">
                          <Icon src={Icons.Mail} size="100" filled={invitesSelected} />
                        </Avatar>
                        <Box as="span" grow="Yes">
                          <Text as="span" size="Inherit" truncate>
                            Invitations
                          </Text>
                        </Box>
                      </Box>
                    </NavItemContent>
                  </NavLink>
                </NavItem>
              </NavCategory>
            </Box>
          </ClientDrawerContentLayout>
        </ClientDrawerLayout>
      }
    >
      <Outlet />
    </ClientContentLayout>
  );
}

export function InboxRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(getInboxNotificationsPath(), { replace: true });
  }, [navigate]);

  return null;
}
